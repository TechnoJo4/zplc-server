import { CID } from 'multiformats/cid';
import { Keypair } from '@atproto/crypto';
import * as t from './types';
export declare const didForCreateOp: (op: t.CompatibleOp) => Promise<string>;
export declare const formatAtprotoOp: (opts: {
    signingKey: string;
    handle: string;
    pds: string;
    rotationKeys: string[];
    prev: CID | null;
}) => t.UnsignedOperation;
export declare const atprotoOp: (opts: {
    signingKey: string;
    handle: string;
    pds: string;
    rotationKeys: string[];
    prev: CID | null;
    signer: Keypair;
}) => Promise<{
    type: "plc_operation";
    rotationKeys: string[];
    verificationMethods: Record<string, string>;
    alsoKnownAs: string[];
    services: Record<string, {
        type: string;
        endpoint: string;
    }>;
    prev: string | null;
} & {
    sig: string;
}>;
export declare const createOp: (opts: {
    signingKey: string;
    handle: string;
    pds: string;
    rotationKeys: string[];
    signer: Keypair;
}) => Promise<{
    op: t.Operation;
    did: string;
}>;
export declare const createUpdateOp: (lastOp: t.CompatibleOp, signer: Keypair, fn: (normalized: t.UnsignedOperation) => Omit<t.UnsignedOperation, "prev">) => Promise<t.Operation>;
export declare const createAtprotoUpdateOp: (lastOp: t.CompatibleOp, signer: Keypair, opts: Partial<{
    signingKey: string;
    handle: string;
    pds: string;
    rotationKeys: string[];
}>) => Promise<{
    type: "plc_operation";
    rotationKeys: string[];
    verificationMethods: Record<string, string>;
    alsoKnownAs: string[];
    services: Record<string, {
        type: string;
        endpoint: string;
    }>;
    prev: string | null;
    sig: string;
}>;
export declare const updateAtprotoKeyOp: (lastOp: t.CompatibleOp, signer: Keypair, signingKey: string) => Promise<t.Operation>;
export declare const updateHandleOp: (lastOp: t.CompatibleOp, signer: Keypair, handle: string) => Promise<t.Operation>;
export declare const updatePdsOp: (lastOp: t.CompatibleOp, signer: Keypair, pds: string) => Promise<t.Operation>;
export declare const updateRotationKeysOp: (lastOp: t.CompatibleOp, signer: Keypair, rotationKeys: string[]) => Promise<t.Operation>;
export declare const tombstoneOp: (prev: CID, key: Keypair) => Promise<t.Tombstone>;
export declare const addSignature: <T extends Record<string, unknown>>(object: T, key: Keypair) => Promise<T & {
    sig: string;
}>;
export declare const signOperation: (op: t.UnsignedOperation, signingKey: Keypair) => Promise<t.Operation>;
export declare const deprecatedSignCreate: (op: t.UnsignedCreateOpV1, signingKey: Keypair) => Promise<t.CreateOpV1>;
export declare const normalizeOp: (op: t.CompatibleOp) => t.Operation;
export declare const assureValidCreationOp: (did: string, op: t.CompatibleOpOrTombstone) => Promise<t.DocumentData>;
export declare const assureValidSig: (allowedDidKeys: string[], op: t.CompatibleOpOrTombstone) => Promise<string>;
export declare const ensureHttpPrefix: (str: string) => string;
export declare const ensureAtprotoPrefix: (str: string) => string;
