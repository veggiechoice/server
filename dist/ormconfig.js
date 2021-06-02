"use strict";
module.exports = [{
        name: "default",
        url: process.env.DATABASE_URL,
        type: "postgres",
        extra: {
          ssl: true
        },
        logging: false,
        migrations: ["./dist/src/database/migrations/**.js"],
        entities: ["./dist/src/models/**.js"],
        cli: {
            "migrationsDir": "./src/database/migrations"
        },
        seeds: ["./dist/src/database/seeds/*{.ts,.js}"]
    }];
