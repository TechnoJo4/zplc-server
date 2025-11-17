import * as z from 'zod';
import * as mf from 'multiformats/cid';
declare const documentData: z.ZodObject<{
    did: z.ZodString;
    rotationKeys: z.ZodArray<z.ZodString, "many">;
    verificationMethods: z.ZodRecord<z.ZodString, z.ZodString>;
    alsoKnownAs: z.ZodArray<z.ZodString, "many">;
    services: z.ZodRecord<z.ZodString, z.ZodObject<{
        type: z.ZodString;
        endpoint: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        type: string;
        endpoint: string;
    }, {
        type: string;
        endpoint: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    did: string;
    rotationKeys: string[];
    verificationMethods: Record<string, string>;
    alsoKnownAs: string[];
    services: Record<string, {
        type: string;
        endpoint: string;
    }>;
}, {
    did: string;
    rotationKeys: string[];
    verificationMethods: Record<string, string>;
    alsoKnownAs: string[];
    services: Record<string, {
        type: string;
        endpoint: string;
    }>;
}>;
export type DocumentData = z.infer<typeof documentData>;
declare const unsignedCreateOpV1: z.ZodObject<{
    type: z.ZodLiteral<"create">;
    signingKey: z.ZodString;
    recoveryKey: z.ZodString;
    handle: z.ZodString;
    service: z.ZodString;
    prev: z.ZodNull;
}, "strict", z.ZodTypeAny, {
    type: "create";
    signingKey: string;
    recoveryKey: string;
    handle: string;
    service: string;
    prev: null;
}, {
    type: "create";
    signingKey: string;
    recoveryKey: string;
    handle: string;
    service: string;
    prev: null;
}>;
export type UnsignedCreateOpV1 = z.infer<typeof unsignedCreateOpV1>;
declare const createOpV1: z.ZodObject<{
    type: z.ZodLiteral<"create">;
    signingKey: z.ZodString;
    recoveryKey: z.ZodString;
    handle: z.ZodString;
    service: z.ZodString;
    prev: z.ZodNull;
    sig: z.ZodString;
}, "strict", z.ZodTypeAny, {
    type: "create";
    signingKey: string;
    recoveryKey: string;
    handle: string;
    service: string;
    prev: null;
    sig: string;
}, {
    type: "create";
    signingKey: string;
    recoveryKey: string;
    handle: string;
    service: string;
    prev: null;
    sig: string;
}>;
export type CreateOpV1 = z.infer<typeof createOpV1>;
declare const unsignedOperation: z.ZodObject<{
    type: z.ZodLiteral<"plc_operation">;
    rotationKeys: z.ZodArray<z.ZodString, "many">;
    verificationMethods: z.ZodRecord<z.ZodString, z.ZodString>;
    alsoKnownAs: z.ZodArray<z.ZodString, "many">;
    services: z.ZodRecord<z.ZodString, z.ZodObject<{
        type: z.ZodString;
        endpoint: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        type: string;
        endpoint: string;
    }, {
        type: string;
        endpoint: string;
    }>>;
    prev: z.ZodNullable<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    type: "plc_operation";
    rotationKeys: string[];
    verificationMethods: Record<string, string>;
    alsoKnownAs: string[];
    services: Record<string, {
        type: string;
        endpoint: string;
    }>;
    prev: string | null;
}, {
    type: "plc_operation";
    rotationKeys: string[];
    verificationMethods: Record<string, string>;
    alsoKnownAs: string[];
    services: Record<string, {
        type: string;
        endpoint: string;
    }>;
    prev: string | null;
}>;
export type UnsignedOperation = z.infer<typeof unsignedOperation>;
declare const operation: z.ZodObject<{
    type: z.ZodLiteral<"plc_operation">;
    rotationKeys: z.ZodArray<z.ZodString, "many">;
    verificationMethods: z.ZodRecord<z.ZodString, z.ZodString>;
    alsoKnownAs: z.ZodArray<z.ZodString, "many">;
    services: z.ZodRecord<z.ZodString, z.ZodObject<{
        type: z.ZodString;
        endpoint: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        type: string;
        endpoint: string;
    }, {
        type: string;
        endpoint: string;
    }>>;
    prev: z.ZodNullable<z.ZodString>;
    sig: z.ZodString;
}, "strict", z.ZodTypeAny, {
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
}, {
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
export type Operation = z.infer<typeof operation>;
declare const unsignedTombstone: z.ZodObject<{
    type: z.ZodLiteral<"plc_tombstone">;
    prev: z.ZodString;
}, "strict", z.ZodTypeAny, {
    type: "plc_tombstone";
    prev: string;
}, {
    type: "plc_tombstone";
    prev: string;
}>;
export type UnsignedTombstone = z.infer<typeof unsignedTombstone>;
declare const tombstone: z.ZodObject<{
    type: z.ZodLiteral<"plc_tombstone">;
    prev: z.ZodString;
    sig: z.ZodString;
}, "strict", z.ZodTypeAny, {
    type: "plc_tombstone";
    prev: string;
    sig: string;
}, {
    type: "plc_tombstone";
    prev: string;
    sig: string;
}>;
export type Tombstone = z.infer<typeof tombstone>;
declare const opOrTombstone: z.ZodUnion<[z.ZodObject<{
    type: z.ZodLiteral<"plc_operation">;
    rotationKeys: z.ZodArray<z.ZodString, "many">;
    verificationMethods: z.ZodRecord<z.ZodString, z.ZodString>;
    alsoKnownAs: z.ZodArray<z.ZodString, "many">;
    services: z.ZodRecord<z.ZodString, z.ZodObject<{
        type: z.ZodString;
        endpoint: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        type: string;
        endpoint: string;
    }, {
        type: string;
        endpoint: string;
    }>>;
    prev: z.ZodNullable<z.ZodString>;
    sig: z.ZodString;
}, "strict", z.ZodTypeAny, {
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
}, {
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
}>, z.ZodObject<{
    type: z.ZodLiteral<"plc_tombstone">;
    prev: z.ZodString;
    sig: z.ZodString;
}, "strict", z.ZodTypeAny, {
    type: "plc_tombstone";
    prev: string;
    sig: string;
}, {
    type: "plc_tombstone";
    prev: string;
    sig: string;
}>]>;
export type OpOrTombstone = z.infer<typeof opOrTombstone>;
declare const compatibleOp: z.ZodUnion<[z.ZodObject<{
    type: z.ZodLiteral<"create">;
    signingKey: z.ZodString;
    recoveryKey: z.ZodString;
    handle: z.ZodString;
    service: z.ZodString;
    prev: z.ZodNull;
    sig: z.ZodString;
}, "strict", z.ZodTypeAny, {
    type: "create";
    signingKey: string;
    recoveryKey: string;
    handle: string;
    service: string;
    prev: null;
    sig: string;
}, {
    type: "create";
    signingKey: string;
    recoveryKey: string;
    handle: string;
    service: string;
    prev: null;
    sig: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"plc_operation">;
    rotationKeys: z.ZodArray<z.ZodString, "many">;
    verificationMethods: z.ZodRecord<z.ZodString, z.ZodString>;
    alsoKnownAs: z.ZodArray<z.ZodString, "many">;
    services: z.ZodRecord<z.ZodString, z.ZodObject<{
        type: z.ZodString;
        endpoint: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        type: string;
        endpoint: string;
    }, {
        type: string;
        endpoint: string;
    }>>;
    prev: z.ZodNullable<z.ZodString>;
    sig: z.ZodString;
}, "strict", z.ZodTypeAny, {
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
}, {
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
}>]>;
export type CompatibleOp = z.infer<typeof compatibleOp>;
declare const compatibleOpOrTombstone: z.ZodUnion<[z.ZodObject<{
    type: z.ZodLiteral<"create">;
    signingKey: z.ZodString;
    recoveryKey: z.ZodString;
    handle: z.ZodString;
    service: z.ZodString;
    prev: z.ZodNull;
    sig: z.ZodString;
}, "strict", z.ZodTypeAny, {
    type: "create";
    signingKey: string;
    recoveryKey: string;
    handle: string;
    service: string;
    prev: null;
    sig: string;
}, {
    type: "create";
    signingKey: string;
    recoveryKey: string;
    handle: string;
    service: string;
    prev: null;
    sig: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"plc_operation">;
    rotationKeys: z.ZodArray<z.ZodString, "many">;
    verificationMethods: z.ZodRecord<z.ZodString, z.ZodString>;
    alsoKnownAs: z.ZodArray<z.ZodString, "many">;
    services: z.ZodRecord<z.ZodString, z.ZodObject<{
        type: z.ZodString;
        endpoint: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        type: string;
        endpoint: string;
    }, {
        type: string;
        endpoint: string;
    }>>;
    prev: z.ZodNullable<z.ZodString>;
    sig: z.ZodString;
}, "strict", z.ZodTypeAny, {
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
}, {
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
}>, z.ZodObject<{
    type: z.ZodLiteral<"plc_tombstone">;
    prev: z.ZodString;
    sig: z.ZodString;
}, "strict", z.ZodTypeAny, {
    type: "plc_tombstone";
    prev: string;
    sig: string;
}, {
    type: "plc_tombstone";
    prev: string;
    sig: string;
}>]>;
export type CompatibleOpOrTombstone = z.infer<typeof compatibleOpOrTombstone>;
export declare const indexedOperation: z.ZodObject<{
    did: z.ZodString;
    operation: z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"create">;
        signingKey: z.ZodString;
        recoveryKey: z.ZodString;
        handle: z.ZodString;
        service: z.ZodString;
        prev: z.ZodNull;
        sig: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        type: "create";
        signingKey: string;
        recoveryKey: string;
        handle: string;
        service: string;
        prev: null;
        sig: string;
    }, {
        type: "create";
        signingKey: string;
        recoveryKey: string;
        handle: string;
        service: string;
        prev: null;
        sig: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"plc_operation">;
        rotationKeys: z.ZodArray<z.ZodString, "many">;
        verificationMethods: z.ZodRecord<z.ZodString, z.ZodString>;
        alsoKnownAs: z.ZodArray<z.ZodString, "many">;
        services: z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodString;
            endpoint: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            type: string;
            endpoint: string;
        }, {
            type: string;
            endpoint: string;
        }>>;
        prev: z.ZodNullable<z.ZodString>;
        sig: z.ZodString;
    }, "strict", z.ZodTypeAny, {
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
    }, {
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
    }>, z.ZodObject<{
        type: z.ZodLiteral<"plc_tombstone">;
        prev: z.ZodString;
        sig: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        type: "plc_tombstone";
        prev: string;
        sig: string;
    }, {
        type: "plc_tombstone";
        prev: string;
        sig: string;
    }>]>;
    cid: z.ZodEffects<z.ZodEffects<z.ZodAny, any, any>, mf.CID, any>;
    nullified: z.ZodBoolean;
    createdAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    did: string;
    operation: {
        type: "create";
        signingKey: string;
        recoveryKey: string;
        handle: string;
        service: string;
        prev: null;
        sig: string;
    } | {
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
    } | {
        type: "plc_tombstone";
        prev: string;
        sig: string;
    };
    cid: mf.CID;
    nullified: boolean;
    createdAt: Date;
}, {
    did: string;
    operation: {
        type: "create";
        signingKey: string;
        recoveryKey: string;
        handle: string;
        service: string;
        prev: null;
        sig: string;
    } | {
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
    } | {
        type: "plc_tombstone";
        prev: string;
        sig: string;
    };
    nullified: boolean;
    createdAt: Date;
    cid?: any;
}>;
export type IndexedOperation = z.infer<typeof indexedOperation>;
export declare const exportedOp: z.ZodObject<{
    did: z.ZodString;
    operation: z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"create">;
        signingKey: z.ZodString;
        recoveryKey: z.ZodString;
        handle: z.ZodString;
        service: z.ZodString;
        prev: z.ZodNull;
        sig: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        type: "create";
        signingKey: string;
        recoveryKey: string;
        handle: string;
        service: string;
        prev: null;
        sig: string;
    }, {
        type: "create";
        signingKey: string;
        recoveryKey: string;
        handle: string;
        service: string;
        prev: null;
        sig: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"plc_operation">;
        rotationKeys: z.ZodArray<z.ZodString, "many">;
        verificationMethods: z.ZodRecord<z.ZodString, z.ZodString>;
        alsoKnownAs: z.ZodArray<z.ZodString, "many">;
        services: z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodString;
            endpoint: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            type: string;
            endpoint: string;
        }, {
            type: string;
            endpoint: string;
        }>>;
        prev: z.ZodNullable<z.ZodString>;
        sig: z.ZodString;
    }, "strict", z.ZodTypeAny, {
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
    }, {
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
    }>, z.ZodObject<{
        type: z.ZodLiteral<"plc_tombstone">;
        prev: z.ZodString;
        sig: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        type: "plc_tombstone";
        prev: string;
        sig: string;
    }, {
        type: "plc_tombstone";
        prev: string;
        sig: string;
    }>]>;
    cid: z.ZodString;
    nullified: z.ZodBoolean;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    did: string;
    operation: {
        type: "create";
        signingKey: string;
        recoveryKey: string;
        handle: string;
        service: string;
        prev: null;
        sig: string;
    } | {
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
    } | {
        type: "plc_tombstone";
        prev: string;
        sig: string;
    };
    cid: string;
    nullified: boolean;
    createdAt: string;
}, {
    did: string;
    operation: {
        type: "create";
        signingKey: string;
        recoveryKey: string;
        handle: string;
        service: string;
        prev: null;
        sig: string;
    } | {
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
    } | {
        type: "plc_tombstone";
        prev: string;
        sig: string;
    };
    cid: string;
    nullified: boolean;
    createdAt: string;
}>;
export type ExportedOp = z.infer<typeof exportedOp>;
export declare const didDocVerificationMethod: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodString;
    controller: z.ZodString;
    publicKeyMultibase: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: string;
    id: string;
    controller: string;
    publicKeyMultibase: string;
}, {
    type: string;
    id: string;
    controller: string;
    publicKeyMultibase: string;
}>;
export declare const didDocService: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodString;
    serviceEndpoint: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: string;
    id: string;
    serviceEndpoint: string;
}, {
    type: string;
    id: string;
    serviceEndpoint: string;
}>;
export declare const didDocument: z.ZodObject<{
    '@context': z.ZodArray<z.ZodString, "many">;
    id: z.ZodString;
    alsoKnownAs: z.ZodArray<z.ZodString, "many">;
    verificationMethod: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodString;
        controller: z.ZodString;
        publicKeyMultibase: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        id: string;
        controller: string;
        publicKeyMultibase: string;
    }, {
        type: string;
        id: string;
        controller: string;
        publicKeyMultibase: string;
    }>, "many">;
    service: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodString;
        serviceEndpoint: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        id: string;
        serviceEndpoint: string;
    }, {
        type: string;
        id: string;
        serviceEndpoint: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    alsoKnownAs: string[];
    service: {
        type: string;
        id: string;
        serviceEndpoint: string;
    }[];
    id: string;
    '@context': string[];
    verificationMethod: {
        type: string;
        id: string;
        controller: string;
        publicKeyMultibase: string;
    }[];
}, {
    alsoKnownAs: string[];
    service: {
        type: string;
        id: string;
        serviceEndpoint: string;
    }[];
    id: string;
    '@context': string[];
    verificationMethod: {
        type: string;
        id: string;
        controller: string;
        publicKeyMultibase: string;
    }[];
}>;
export type DidDocument = z.infer<typeof didDocument>;
export declare const def: {
    documentData: z.ZodObject<{
        did: z.ZodString;
        rotationKeys: z.ZodArray<z.ZodString, "many">;
        verificationMethods: z.ZodRecord<z.ZodString, z.ZodString>;
        alsoKnownAs: z.ZodArray<z.ZodString, "many">;
        services: z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodString;
            endpoint: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            type: string;
            endpoint: string;
        }, {
            type: string;
            endpoint: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        did: string;
        rotationKeys: string[];
        verificationMethods: Record<string, string>;
        alsoKnownAs: string[];
        services: Record<string, {
            type: string;
            endpoint: string;
        }>;
    }, {
        did: string;
        rotationKeys: string[];
        verificationMethods: Record<string, string>;
        alsoKnownAs: string[];
        services: Record<string, {
            type: string;
            endpoint: string;
        }>;
    }>;
    createOpV1: z.ZodObject<{
        type: z.ZodLiteral<"create">;
        signingKey: z.ZodString;
        recoveryKey: z.ZodString;
        handle: z.ZodString;
        service: z.ZodString;
        prev: z.ZodNull;
        sig: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        type: "create";
        signingKey: string;
        recoveryKey: string;
        handle: string;
        service: string;
        prev: null;
        sig: string;
    }, {
        type: "create";
        signingKey: string;
        recoveryKey: string;
        handle: string;
        service: string;
        prev: null;
        sig: string;
    }>;
    unsignedOperation: z.ZodObject<{
        type: z.ZodLiteral<"plc_operation">;
        rotationKeys: z.ZodArray<z.ZodString, "many">;
        verificationMethods: z.ZodRecord<z.ZodString, z.ZodString>;
        alsoKnownAs: z.ZodArray<z.ZodString, "many">;
        services: z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodString;
            endpoint: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            type: string;
            endpoint: string;
        }, {
            type: string;
            endpoint: string;
        }>>;
        prev: z.ZodNullable<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        type: "plc_operation";
        rotationKeys: string[];
        verificationMethods: Record<string, string>;
        alsoKnownAs: string[];
        services: Record<string, {
            type: string;
            endpoint: string;
        }>;
        prev: string | null;
    }, {
        type: "plc_operation";
        rotationKeys: string[];
        verificationMethods: Record<string, string>;
        alsoKnownAs: string[];
        services: Record<string, {
            type: string;
            endpoint: string;
        }>;
        prev: string | null;
    }>;
    operation: z.ZodObject<{
        type: z.ZodLiteral<"plc_operation">;
        rotationKeys: z.ZodArray<z.ZodString, "many">;
        verificationMethods: z.ZodRecord<z.ZodString, z.ZodString>;
        alsoKnownAs: z.ZodArray<z.ZodString, "many">;
        services: z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodString;
            endpoint: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            type: string;
            endpoint: string;
        }, {
            type: string;
            endpoint: string;
        }>>;
        prev: z.ZodNullable<z.ZodString>;
        sig: z.ZodString;
    }, "strict", z.ZodTypeAny, {
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
    }, {
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
    tombstone: z.ZodObject<{
        type: z.ZodLiteral<"plc_tombstone">;
        prev: z.ZodString;
        sig: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        type: "plc_tombstone";
        prev: string;
        sig: string;
    }, {
        type: "plc_tombstone";
        prev: string;
        sig: string;
    }>;
    opOrTombstone: z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"plc_operation">;
        rotationKeys: z.ZodArray<z.ZodString, "many">;
        verificationMethods: z.ZodRecord<z.ZodString, z.ZodString>;
        alsoKnownAs: z.ZodArray<z.ZodString, "many">;
        services: z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodString;
            endpoint: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            type: string;
            endpoint: string;
        }, {
            type: string;
            endpoint: string;
        }>>;
        prev: z.ZodNullable<z.ZodString>;
        sig: z.ZodString;
    }, "strict", z.ZodTypeAny, {
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
    }, {
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
    }>, z.ZodObject<{
        type: z.ZodLiteral<"plc_tombstone">;
        prev: z.ZodString;
        sig: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        type: "plc_tombstone";
        prev: string;
        sig: string;
    }, {
        type: "plc_tombstone";
        prev: string;
        sig: string;
    }>]>;
    compatibleOp: z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"create">;
        signingKey: z.ZodString;
        recoveryKey: z.ZodString;
        handle: z.ZodString;
        service: z.ZodString;
        prev: z.ZodNull;
        sig: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        type: "create";
        signingKey: string;
        recoveryKey: string;
        handle: string;
        service: string;
        prev: null;
        sig: string;
    }, {
        type: "create";
        signingKey: string;
        recoveryKey: string;
        handle: string;
        service: string;
        prev: null;
        sig: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"plc_operation">;
        rotationKeys: z.ZodArray<z.ZodString, "many">;
        verificationMethods: z.ZodRecord<z.ZodString, z.ZodString>;
        alsoKnownAs: z.ZodArray<z.ZodString, "many">;
        services: z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodString;
            endpoint: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            type: string;
            endpoint: string;
        }, {
            type: string;
            endpoint: string;
        }>>;
        prev: z.ZodNullable<z.ZodString>;
        sig: z.ZodString;
    }, "strict", z.ZodTypeAny, {
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
    }, {
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
    }>]>;
    compatibleOpOrTombstone: z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"create">;
        signingKey: z.ZodString;
        recoveryKey: z.ZodString;
        handle: z.ZodString;
        service: z.ZodString;
        prev: z.ZodNull;
        sig: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        type: "create";
        signingKey: string;
        recoveryKey: string;
        handle: string;
        service: string;
        prev: null;
        sig: string;
    }, {
        type: "create";
        signingKey: string;
        recoveryKey: string;
        handle: string;
        service: string;
        prev: null;
        sig: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"plc_operation">;
        rotationKeys: z.ZodArray<z.ZodString, "many">;
        verificationMethods: z.ZodRecord<z.ZodString, z.ZodString>;
        alsoKnownAs: z.ZodArray<z.ZodString, "many">;
        services: z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodString;
            endpoint: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            type: string;
            endpoint: string;
        }, {
            type: string;
            endpoint: string;
        }>>;
        prev: z.ZodNullable<z.ZodString>;
        sig: z.ZodString;
    }, "strict", z.ZodTypeAny, {
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
    }, {
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
    }>, z.ZodObject<{
        type: z.ZodLiteral<"plc_tombstone">;
        prev: z.ZodString;
        sig: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        type: "plc_tombstone";
        prev: string;
        sig: string;
    }, {
        type: "plc_tombstone";
        prev: string;
        sig: string;
    }>]>;
    indexedOperation: z.ZodObject<{
        did: z.ZodString;
        operation: z.ZodUnion<[z.ZodObject<{
            type: z.ZodLiteral<"create">;
            signingKey: z.ZodString;
            recoveryKey: z.ZodString;
            handle: z.ZodString;
            service: z.ZodString;
            prev: z.ZodNull;
            sig: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            type: "create";
            signingKey: string;
            recoveryKey: string;
            handle: string;
            service: string;
            prev: null;
            sig: string;
        }, {
            type: "create";
            signingKey: string;
            recoveryKey: string;
            handle: string;
            service: string;
            prev: null;
            sig: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"plc_operation">;
            rotationKeys: z.ZodArray<z.ZodString, "many">;
            verificationMethods: z.ZodRecord<z.ZodString, z.ZodString>;
            alsoKnownAs: z.ZodArray<z.ZodString, "many">;
            services: z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodString;
                endpoint: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                type: string;
                endpoint: string;
            }, {
                type: string;
                endpoint: string;
            }>>;
            prev: z.ZodNullable<z.ZodString>;
            sig: z.ZodString;
        }, "strict", z.ZodTypeAny, {
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
        }, {
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
        }>, z.ZodObject<{
            type: z.ZodLiteral<"plc_tombstone">;
            prev: z.ZodString;
            sig: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            type: "plc_tombstone";
            prev: string;
            sig: string;
        }, {
            type: "plc_tombstone";
            prev: string;
            sig: string;
        }>]>;
        cid: z.ZodEffects<z.ZodEffects<z.ZodAny, any, any>, mf.CID, any>;
        nullified: z.ZodBoolean;
        createdAt: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        did: string;
        operation: {
            type: "create";
            signingKey: string;
            recoveryKey: string;
            handle: string;
            service: string;
            prev: null;
            sig: string;
        } | {
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
        } | {
            type: "plc_tombstone";
            prev: string;
            sig: string;
        };
        cid: mf.CID;
        nullified: boolean;
        createdAt: Date;
    }, {
        did: string;
        operation: {
            type: "create";
            signingKey: string;
            recoveryKey: string;
            handle: string;
            service: string;
            prev: null;
            sig: string;
        } | {
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
        } | {
            type: "plc_tombstone";
            prev: string;
            sig: string;
        };
        nullified: boolean;
        createdAt: Date;
        cid?: any;
    }>;
    exportedOp: z.ZodObject<{
        did: z.ZodString;
        operation: z.ZodUnion<[z.ZodObject<{
            type: z.ZodLiteral<"create">;
            signingKey: z.ZodString;
            recoveryKey: z.ZodString;
            handle: z.ZodString;
            service: z.ZodString;
            prev: z.ZodNull;
            sig: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            type: "create";
            signingKey: string;
            recoveryKey: string;
            handle: string;
            service: string;
            prev: null;
            sig: string;
        }, {
            type: "create";
            signingKey: string;
            recoveryKey: string;
            handle: string;
            service: string;
            prev: null;
            sig: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"plc_operation">;
            rotationKeys: z.ZodArray<z.ZodString, "many">;
            verificationMethods: z.ZodRecord<z.ZodString, z.ZodString>;
            alsoKnownAs: z.ZodArray<z.ZodString, "many">;
            services: z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodString;
                endpoint: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                type: string;
                endpoint: string;
            }, {
                type: string;
                endpoint: string;
            }>>;
            prev: z.ZodNullable<z.ZodString>;
            sig: z.ZodString;
        }, "strict", z.ZodTypeAny, {
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
        }, {
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
        }>, z.ZodObject<{
            type: z.ZodLiteral<"plc_tombstone">;
            prev: z.ZodString;
            sig: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            type: "plc_tombstone";
            prev: string;
            sig: string;
        }, {
            type: "plc_tombstone";
            prev: string;
            sig: string;
        }>]>;
        cid: z.ZodString;
        nullified: z.ZodBoolean;
        createdAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        did: string;
        operation: {
            type: "create";
            signingKey: string;
            recoveryKey: string;
            handle: string;
            service: string;
            prev: null;
            sig: string;
        } | {
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
        } | {
            type: "plc_tombstone";
            prev: string;
            sig: string;
        };
        cid: string;
        nullified: boolean;
        createdAt: string;
    }, {
        did: string;
        operation: {
            type: "create";
            signingKey: string;
            recoveryKey: string;
            handle: string;
            service: string;
            prev: null;
            sig: string;
        } | {
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
        } | {
            type: "plc_tombstone";
            prev: string;
            sig: string;
        };
        cid: string;
        nullified: boolean;
        createdAt: string;
    }>;
    didDocument: z.ZodObject<{
        '@context': z.ZodArray<z.ZodString, "many">;
        id: z.ZodString;
        alsoKnownAs: z.ZodArray<z.ZodString, "many">;
        verificationMethod: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            type: z.ZodString;
            controller: z.ZodString;
            publicKeyMultibase: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
            controller: string;
            publicKeyMultibase: string;
        }, {
            type: string;
            id: string;
            controller: string;
            publicKeyMultibase: string;
        }>, "many">;
        service: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            type: z.ZodString;
            serviceEndpoint: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
            serviceEndpoint: string;
        }, {
            type: string;
            id: string;
            serviceEndpoint: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        alsoKnownAs: string[];
        service: {
            type: string;
            id: string;
            serviceEndpoint: string;
        }[];
        id: string;
        '@context': string[];
        verificationMethod: {
            type: string;
            id: string;
            controller: string;
            publicKeyMultibase: string;
        }[];
    }, {
        alsoKnownAs: string[];
        service: {
            type: string;
            id: string;
            serviceEndpoint: string;
        }[];
        id: string;
        '@context': string[];
        verificationMethod: {
            type: string;
            id: string;
            controller: string;
            publicKeyMultibase: string;
        }[];
    }>;
};
export {};
