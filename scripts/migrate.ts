import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { drizzle } from "drizzle-orm/neon-http";

config({ path: ".env.local" });
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in the environment variables.");
}
const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql);

const main = async () => {
  try {
    await migrate(db, { migrationsFolder: "drizzle" });
  } catch (error) {
    console.error("error during migration:", error);
    process.exit(1);
  }
};

main();
