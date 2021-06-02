"use strict";
module.exports = [{
        name: "default",
        url: process.env.DATABASE_URL,
        type: "postgres",
        ssl: true,
        extra: {
          ssl: {
            rejectUnauthorized: false,
          },
        },
        logging: false,
        migrations: ["./dist/src/database/migrations/**.js"],
        entities: ["./dist/src/models/**.js"],
        cli: {
            "migrationsDir": "./src/database/migrations"
        },
        seeds: ["./src/database/seeds/*{.ts,.js}"]
    }];
