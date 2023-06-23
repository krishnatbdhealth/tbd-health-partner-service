import { withSwagger } from 'next-swagger-doc';

const swaggerHandler = withSwagger({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TBD Health Partner API Services',
      version: '0.1.0',
    },
  },
  schemaFolders: ['models'],
  apiFolder: 'pages/api',
});
export default swaggerHandler();
