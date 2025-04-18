import 'dotenv/config';

export default {
  dialect: 'postgresql',
  schema: './src/utils/schema.js',
  out: './drizzle',
  dbCredentials: {
    url: process.env.VITE_DATABASE_CONNECTION_STRING,
    connectionString: process.env.VITE_DATABASE_CONNECTION_STRING
  }
};
