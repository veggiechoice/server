"use strict";
module.exports = [{
        name: "default",
        url: process.env.DATABASE_URL,
        ssl: process.env.NODE_ENV !== 'development' ? true : false,
        extra: process.env.NODE_ENV !== 'development' ? {
            ssl: {
                rejectUnauthorized: false,
            },
        } : {},
        type: "postgres",
        logging: false,
        migrations: process.env.NODE_ENV === 'development' ? ["./src/database/migrations/**.ts"] : ["./dist/src/database/migrations/**.js"],
        entities: process.env.NODE_ENV === 'development' ? ["./src/models/**.ts"] : ["./dist/src/models/**.js"],
        cli: {
            "migrationsDir": "./src/database/migrations"
        },
        seeds: ["./src/database/seeds/*{.ts,.js}"]
    }];
