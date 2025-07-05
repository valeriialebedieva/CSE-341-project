const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'Contacts API Documentation'
    },
    host: 'https://cse-341-project-3vj1.onrender.com/',
    schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routers/index.js'];

// This will generate the swagger.json file
swaggerAutogen(outputFile, endpointsFiles, doc);