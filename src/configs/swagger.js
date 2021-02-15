const swaggerJsDoc = require("swagger-jsdoc");

const { port } = require("./env");

const swagger = {
  swaggerDefinition: {
    info: {
      version: "2.0.0",
      title: "WAYAGram __ API",
      contact: { name: "Claret Nnamocha" },
      servers: [{ url: `http://localhost:${port}` }],
    },
  },
  apis: ["./src/docs.yml"],
};

module.exports = swaggerJsDoc(swagger);
