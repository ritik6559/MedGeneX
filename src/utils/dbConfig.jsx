import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as Schema from './schema';

const sql = neon(
  import.meta.env.VITE_DATABASE_CONNECTION_STRING,
);

export const db = drizzle(sql, { Schema });
