module.exports = [
"[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/[externals]_pg_e5ad4e6e._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
    });
});
}),
];