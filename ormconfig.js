module.exports = [{
  name: "default",
  url: process.env.DATABASE_URL,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  type: "postgres",
  logging: false,
  migrations: ["./dist/src/database/migrations/**.js"],
  entities: ["./dist/src/models/**.js"],
  cli: {
      "migrationsDir": "./src/database/migrations"
  },
  seeds: ["./dist/src/database/seeds/*{.ts,.js}"]
}]
