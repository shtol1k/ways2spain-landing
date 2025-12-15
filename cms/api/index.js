const strapi = require('@strapi/strapi');

const app = strapi({ dir: process.cwd() });

app.start();
