module.exports = [
"[externals]/node:module [external] (node:module, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:module", () => require("node:module"));

module.exports = mod;
}),
"[externals]/readline [external] (readline, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("readline", () => require("readline"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/worker_threads [external] (worker_threads, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("worker_threads", () => require("worker_threads"));

module.exports = mod;
}),
"[externals]/pnpapi [external] (pnpapi, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("pnpapi", () => require("pnpapi"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/stream/web [external] (stream/web, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream/web", () => require("stream/web"));

module.exports = mod;
}),
"[externals]/stream/promises [external] (stream/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream/promises", () => require("stream/promises"));

module.exports = mod;
}),
"[externals]/string_decoder [external] (string_decoder, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("string_decoder", () => require("string_decoder"));

module.exports = mod;
}),
"[externals]/perf_hooks [external] (perf_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("perf_hooks", () => require("perf_hooks"));

module.exports = mod;
}),
"[externals]/timers [external] (timers, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("timers", () => require("timers"));

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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$config$2f$build$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/payload/dist/config/build.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/db-postgres/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Users$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/collections/Users.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Testimonials$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/collections/Testimonials.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Media$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/collections/Media.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$config$2f$build$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildConfig"])({
    // Database configuration
    database: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postgresAdapter"])({
        pool: {
            connectionString: process.env.DATABASE_URL || 'postgresql://atamanov@localhost:5432/w2s_local'
        }
    }),
    // Admin panel configuration
    admin: {
        user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Users$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Users"].slug,
        meta: {
            title: 'Ways2Spain Admin',
            description: 'Content Management System'
        }
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ebd7d2cc._.js.map