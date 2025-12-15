const strapi = require('@strapi/strapi');

const app = strapi({ dir: __dirname });

app.start();
