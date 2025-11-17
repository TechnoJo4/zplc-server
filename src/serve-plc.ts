import { CompatibleOpOrTombstone, DidDocument, formatDidDoc, opToData } from "https://esm.sh/gh/did-method-plc/did-method-plc/packages/lib";
import { db } from "./db.ts";

const statement = db.log?.prepare("SELECT entry FROM plc_entries WHERE did = ? ORDER BY id DESC LIMIT 1");
if (!statement) throw new Error("can't serve plc when ZPLC_NO_RAW_LOG is set");

// deno-lint-ignore-file no-explicit-any
function pipe(x: any, ...F: any): any {
  const f = F.shift();
  return x !== undefined ? F.length > 1 ? pipe(f(x), ...F) : f(x) : x;
}

export default {
  fetch(req, _info): Response {
    const pathname = decodeURIComponent(new URL(req.url).pathname);

    if (pathname.startsWith("/did:")) {
      const did = pathname.substring(1);
      const doc: DidDocument | undefined = pipe(statement.value<[entry: string]>(did),
          (it: [entry: string]) => it[0],
          (it: string) => JSON.parse(it).operation,
          (op: CompatibleOpOrTombstone) => opToData(did, op),
          formatDidDoc);

      return doc
        ? new Response(JSON.stringify(doc), { headers: { "content-type": "application/json" } })
        : new Response(JSON.stringify({ message: "DID not registered: " + did }), {
            status: 404,
            headers: { "content-type": "application/json" },
          });
    }

    return new Response("Not Found", {
      headers: { "content-type": "text/plain" },
      status: 404,
    });
  },
} satisfies Deno.ServeDefaultExport;
