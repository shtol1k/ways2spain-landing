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
    // Cookies and sessions configuration
    cookies: {
        suffix: 'w2s-payload',
        sameSite: 'lax',
        secure: false,
        domain: undefined
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
    "@payloadcms/next/rsc#CollectionCards": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$widgets$2f$CollectionCards$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionCards"]
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/(payload)/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "$$RSC_SERVER_ACTION_0",
    ()=>$$RSC_SERVER_ACTION_0,
    "default",
    ()=>__TURBOPACK__default__export__,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */ /* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */ /* __next_internal_action_entry_do_not_use__ [{"400b6239503a5058f8313216cb1ad380a5f305084d":"$$RSC_SERVER_ACTION_0"},"",""] */ var __TURBOPACK__imported__module__$5b$project$5d2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/payload.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$handleServerFunctions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/next/dist/utilities/handleServerFunctions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$layouts$2f$Root$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/next/dist/layouts/Root/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$payload$292f$admin$2f$importMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(payload)/admin/importMap.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$handleServerFunctions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$layouts$2f$Root$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$payload$292f$admin$2f$importMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$handleServerFunctions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$layouts$2f$Root$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$payload$292f$admin$2f$importMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const $$RSC_SERVER_ACTION_0 = async function serverFunction(args) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$handleServerFunctions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleServerFunctions"])({
        ...args,
        config: __TURBOPACK__imported__module__$5b$project$5d2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        importMap: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$payload$292f$admin$2f$importMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["importMap"]
    });
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_0, "400b6239503a5058f8313216cb1ad380a5f305084d", null);
const serverFunction = $$RSC_SERVER_ACTION_0;
const Layout = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$layouts$2f$Root$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RootLayout"], {
        config: __TURBOPACK__imported__module__$5b$project$5d2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        serverFunction: serverFunction,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/(payload)/layout.tsx",
        lineNumber: 26,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const __TURBOPACK__default__export__ = Layout;
const runtime = 'nodejs';
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e4285f5c._.js.map