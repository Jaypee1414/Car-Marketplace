/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./schema.ts",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://cardb_owner:Ca3Wdp7IUGSM@ep-lucky-breeze-a56w6evu.us-east-2.aws.neon.tech/cardb?sslmode=require'
    }
  };
  