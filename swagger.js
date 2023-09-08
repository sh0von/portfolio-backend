const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0', // Specify the version of OpenAPI
    info: {
      title: 'Your API Documentation', // Title of your API
      version: '1.0.0', // Version of your API
      description: 'API documentation for your project', // Description of your API
    },
  },
  // Define API routes and options here
  apis: ['./routes/*.js'], // Specify the route files where your API endpoints are defined
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
