module.exports = [{
  name: "default",
  url: process.env.DATABASE_URL,
  // ssl: true,
  // extra: {
  //   ssl: {
  //     rejectUnauthorized: false,
  //   },
  // },
  type: "postgres",
  logging: false,
  migrations: ["./src/database/migrations/**.ts"],
  entities: ["./src/models/**.ts"],
  cli: {
      "migrationsDir": "./src/database/migrations"
  },
  seeds: ["./src/database/seeds/*{.ts,.js}"]
}]
