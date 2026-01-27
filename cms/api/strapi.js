const strapi = require('@strapi/strapi');

const strapiInstance = strapi({
  dir: process.cwd(),
});

async function handler(req, res) {
  if (!strapiInstance.isLoaded) {
    await strapiInstance.load();
  }
  await strapiInstance.server(req, res);
}

module.exports = handler;




