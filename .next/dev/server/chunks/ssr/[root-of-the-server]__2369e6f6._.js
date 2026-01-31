module.exports = [
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/src/collections/Users.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Users",
    ()=>Users
]);
const Users = {
    slug: 'users',
    auth: true,
    admin: {
        useAsTitle: 'name',
        defaultColumns: [
            'name',
            'email'
        ]
    },
    access: {
        read: ({ req })=>{
            // Users can read themselves, admins can read everyone
            const user = req.user;
            if (!user) return false;
            if (user.role === 'admin') return true;
            return {
                id: {
                    equals: user.id
                }
            };
        },
        create: ()=>false,
        update: ({ req })=>{
            const user = req.user;
            if (!user) return false;
            // Admins can update any user
            // Managers can only update themselves
            return user.role === 'admin' || user.id === req.user.id;
        },
        delete: ({ req })=>{
            // Only admins can delete users
            const user = req.user;
            if (!user) return false;
            return user.role === 'admin';
        }
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true
        },
        {
            name: 'role',
            type: 'select',
            required: true,
            defaultValue: 'manager',
            options: [
                {
                    label: 'Admin',
                    value: 'admin'
                },
                {
                    label: 'Manager',
                    value: 'manager'
                }
            ],
            admin: {
                description: 'Admin: Full access including settings. Manager: Content management only.'
            }
        }
    ]
};
}),
"[project]/src/collections/Testimonials.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Testimonials",
    ()=>Testimonials
]);
const Testimonials = {
    slug: 'testimonials',
    admin: {
        useAsTitle: 'name',
        defaultColumns: [
            'name',
            'title',
            'date'
        ]
    },
    access: {
        read: ()=>true,
        create: ({ req })=>{
            const user = req.user;
            if (!user) return false;
            return user.role === 'admin' || user.role === 'manager';
        },
        update: ({ req })=>{
            const user = req.user;
            if (!user) return false;
            return user.role === 'admin' || user.role === 'manager';
        },
        delete: ({ req })=>{
            // Only admins can delete testimonials
            const user = req.user;
            if (!user) return false;
            return user.role === 'admin';
        }
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            localized: true
        },
        {
            name: 'title',
            type: 'text',
            required: true,
            localized: true
        },
        {
            name: 'testimonial',
            type: 'textarea',
            required: true,
            localized: true,
            admin: {
                description: 'Client testimonial text'
            }
        },
        {
            name: 'date',
            type: 'date',
            required: true,
            admin: {
                date: {
                    displayFormat: 'dd.MM.yyyy'
                }
            }
        },
        {
            name: 'photo',
            type: 'upload',
            relationTo: 'media',
            required: false,
            admin: {
                description: 'Client photo (optional)'
            }
        },
        {
            name: 'socialLinks',
            type: 'group',
            fields: [
                {
                    name: 'linkedin',
                    type: 'text',
                    admin: {
                        description: 'LinkedIn profile URL'
                    }
                },
                {
                    name: 'facebook',
                    type: 'text',
                    admin: {
                        description: 'Facebook profile URL'
                    }
                },
                {
                    name: 'twitter',
                    type: 'text',
                    admin: {
                        description: 'Twitter/X profile URL'
                    }
                },
                {
                    name: 'instagram',
                    type: 'text',
                    admin: {
                        description: 'Instagram profile URL'
                    }
                },
                {
                    name: 'telegram',
                    type: 'text',
                    admin: {
                        description: 'Telegram profile URL'
                    }
                }
            ]
        },
        {
            name: 'published',
            type: 'checkbox',
            defaultValue: true,
            admin: {
                description: 'Show on website'
            }
        }
    ]
};
}),
"[project]/src/collections/Media.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Media",
    ()=>Media
]);
const Media = {
    slug: 'media',
    admin: {
        useAsTitle: 'filename'
    },
    access: {
        read: ()=>true,
        create: ({ req })=>{
            const user = req.user;
            if (!user) return false;
            return user.role === 'admin' || user.role === 'manager';
        },
        update: ({ req })=>{
            const user = req.user;
            if (!user) return false;
            return user.role === 'admin' || user.role === 'manager';
        },
        delete: ({ req })=>{
            // Only admins can delete media
            const user = req.user;
            if (!user) return false;
            return user.role === 'admin';
        }
    },
    upload: {
        staticDir: 'public/media',
        staticURL: '/media',
        disableLocalStorage: true,
        adminThumbnail: 'thumbnail',
        imageSizes: [
            {
                name: 'thumbnail',
                width: 300,
                height: 300
            },
            {
                name: 'medium',
                width: 800,
                height: 600
            },
            {
                name: 'large',
                width: 1920,
                height: 1080
            }
        ]
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            label: 'Alt Text',
            admin: {
                description: 'Accessible description of the image'
            }
        },
        {
            name: 'caption',
            type: 'text',
            label: 'Caption'
        }
    ]
};
}),
"[project]/payload.config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload [external] (payload, esm_import, [project]/node_modules/payload)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$postgres__$5b$external$5d$__$2840$payloadcms$2f$db$2d$postgres$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$29$__ = __turbopack_context__.i("[externals]/@payloadcms/db-postgres [external] (@payloadcms/db-postgres, esm_import, [project]/node_modules/@payloadcms/db-postgres)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/richtext-lexical/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$sharp__$5b$external$5d$__$28$sharp$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$sharp$29$__ = __turbopack_context__.i("[externals]/sharp [external] (sharp, cjs, [project]/node_modules/sharp)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Users$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/collections/Users.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Testimonials$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/collections/Testimonials.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/collections/Media.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$postgres__$5b$external$5d$__$2840$payloadcms$2f$db$2d$postgres$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$postgres__$5b$external$5d$__$2840$payloadcms$2f$db$2d$postgres$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["buildConfig"])({
    // Rich text editor
    editor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lexicalEditor"])(),
    // Database configuration
    db: (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$postgres__$5b$external$5d$__$2840$payloadcms$2f$db$2d$postgres$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$29$__["postgresAdapter"])({
        pool: {
            connectionString: process.env.DATABASE_URL || 'postgresql://atamanov@localhost:5432/w2s_local'
        }
    }),
    // Sharp for image processing
    sharp: __TURBOPACK__imported__module__$5b$externals$5d2f$sharp__$5b$external$5d$__$28$sharp$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$sharp$29$__["default"],
    // Admin panel configuration
    admin: {
        user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Users$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Users"].slug,
        meta: {
            title: 'Ways2Spain Admin',
            description: 'Content Management System'
        }
    },
    // Collections
    collections: [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Users$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Users"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Testimonials$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Testimonials"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Media"]
    ],
    // Server configuration
    serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
    cors: [
        process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
        'http://localhost:3000'
    ],
    csrf: [
        process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
        'http://localhost:3000'
    ],
    // Security
    secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-this-in-production',
    // Typescript
    typescript: {
        outputFile: './src/types/payload.ts'
    },
    // Media configuration (local storage for now)
    // Cloudflare R2 will be configured later
    plugins: []
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/(payload)/admin/importMap.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "importMap",
    ()=>importMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$widgets$2f$CollectionCards$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/ui/dist/widgets/CollectionCards/index.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$widgets$2f$CollectionCards$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$widgets$2f$CollectionCards$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const importMap = {
    '@payloadcms/ui/rsc#CollectionCards': __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$widgets$2f$CollectionCards$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionCards"]
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/(payload)/admin/[[...segments]]/not-found.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */ /* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "generateMetadata",
    ()=>generateMetadata,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/payload.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$NotFound$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/next/dist/views/NotFound/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/next/dist/views/Root/metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$payload$292f$admin$2f$importMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(payload)/admin/importMap.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$NotFound$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$payload$292f$admin$2f$importMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$NotFound$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$payload$292f$admin$2f$importMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const generateMetadata = ({ params, searchParams })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generatePageMetadata"])({
        config: __TURBOPACK__imported__module__$5b$project$5d2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        params,
        searchParams
    });
const NotFound = ({ params, searchParams })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$NotFound$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NotFoundPage"])({
        config: __TURBOPACK__imported__module__$5b$project$5d2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        params,
        searchParams,
        importMap: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$payload$292f$admin$2f$importMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["importMap"]
    });
const __TURBOPACK__default__export__ = NotFound;
const runtime = 'nodejs';
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2369e6f6._.js.map