module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/src/collections/Users.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/collections/Testimonials.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/collections/Media.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/payload.config.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload [external] (payload, esm_import, [project]/node_modules/payload)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$postgres__$5b$external$5d$__$2840$payloadcms$2f$db$2d$postgres$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$29$__ = __turbopack_context__.i("[externals]/@payloadcms/db-postgres [external] (@payloadcms/db-postgres, esm_import, [project]/node_modules/@payloadcms/db-postgres)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/richtext-lexical/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$sharp__$5b$external$5d$__$28$sharp$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$sharp$29$__ = __turbopack_context__.i("[externals]/sharp [external] (sharp, cjs, [project]/node_modules/sharp)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Users$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/collections/Users.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Testimonials$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/collections/Testimonials.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Media$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/collections/Media.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$postgres__$5b$external$5d$__$2840$payloadcms$2f$db$2d$postgres$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$postgres__$5b$external$5d$__$2840$payloadcms$2f$db$2d$postgres$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["buildConfig"])({
    // Rich text editor
    editor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lexicalEditor"])(),
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
        user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Users$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Users"].slug,
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
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Users$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Users"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Testimonials$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Testimonials"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Media$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Media"]
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
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[project]/src/app/(payload)/api/[...slug]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "OPTIONS",
    ()=>OPTIONS,
    "PATCH",
    ()=>PATCH,
    "POST",
    ()=>POST,
    "PUT",
    ()=>PUT,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */ /* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */ var __TURBOPACK__imported__module__$5b$project$5d2f$payload$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/payload.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__DELETE__as__REST_DELETE$3e$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/next/dist/routes/rest/index.js [app-route] (ecmascript) <export DELETE as REST_DELETE>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__GET__as__REST_GET$3e$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/next/dist/routes/rest/index.js [app-route] (ecmascript) <export GET as REST_GET>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OPTIONS__as__REST_OPTIONS$3e$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/next/dist/routes/rest/index.js [app-route] (ecmascript) <export OPTIONS as REST_OPTIONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__PATCH__as__REST_PATCH$3e$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/next/dist/routes/rest/index.js [app-route] (ecmascript) <export PATCH as REST_PATCH>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__POST__as__REST_POST$3e$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/next/dist/routes/rest/index.js [app-route] (ecmascript) <export POST as REST_POST>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__PUT__as__REST_PUT$3e$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/next/dist/routes/rest/index.js [app-route] (ecmascript) <export PUT as REST_PUT>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$payload$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__DELETE__as__REST_DELETE$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__GET__as__REST_GET$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OPTIONS__as__REST_OPTIONS$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__PATCH__as__REST_PATCH$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__POST__as__REST_POST$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__PUT__as__REST_PUT$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$payload$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__DELETE__as__REST_DELETE$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__GET__as__REST_GET$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OPTIONS__as__REST_OPTIONS$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__PATCH__as__REST_PATCH$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__POST__as__REST_POST$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__PUT__as__REST_PUT$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const GET = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__GET__as__REST_GET$3e$__["REST_GET"])(__TURBOPACK__imported__module__$5b$project$5d2f$payload$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]);
const POST = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__POST__as__REST_POST$3e$__["REST_POST"])(__TURBOPACK__imported__module__$5b$project$5d2f$payload$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]);
const DELETE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__DELETE__as__REST_DELETE$3e$__["REST_DELETE"])(__TURBOPACK__imported__module__$5b$project$5d2f$payload$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]);
const PATCH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__PATCH__as__REST_PATCH$3e$__["REST_PATCH"])(__TURBOPACK__imported__module__$5b$project$5d2f$payload$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]);
const PUT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__PUT__as__REST_PUT$3e$__["REST_PUT"])(__TURBOPACK__imported__module__$5b$project$5d2f$payload$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]);
const OPTIONS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OPTIONS__as__REST_OPTIONS$3e$__["REST_OPTIONS"])(__TURBOPACK__imported__module__$5b$project$5d2f$payload$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]);
const runtime = 'nodejs';
const dynamic = 'force-dynamic';
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__53c399e3._.js.map