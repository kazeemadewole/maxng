"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
const CommentModel_1 = require("./model/CommentModel");
const FilmModel_1 = require("./model/FilmModel");
dotenv_1.default.config();
const ORMConfig = async () => {
    console.log('here is db');
    try {
        await typeorm_1.createConnection({
            type: 'postgres',
            url: process.env.DATABASE_URL,
            entities: [CommentModel_1.CommentModel, FilmModel_1.FilmModel],
            synchronize: true,
            ssl: {
                rejectUnauthorized: false
            }
        });
        console.log('Connected to Postgres');
    }
    catch (error) {
        console.error(error);
    }
};
module.exports = ORMConfig;
//# sourceMappingURL=databaseConnect.js.map