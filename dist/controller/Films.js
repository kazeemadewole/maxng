"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOne = exports.getAll = void 0;
const CommentModel_1 = require("../model/CommentModel");
const typeorm_1 = require("typeorm");
const axios_1 = __importDefault(require("axios"));
const getAll = async (req, res) => {
    let result = [];
    let output = [];
    try {
        const data = await axios_1.default.get(`https://swapi.dev/api/films`);
        for (let i = 0; i < data.data.results.length; i++) {
            let mydata = {};
            let each = data.data.results[i];
            mydata.title = each.title;
            mydata.episode_id = each.episode_id;
            mydata.opening_crawl = each.opening_crawl;
            mydata.release_date = each.release_date;
            const id = each.episode_id;
            const comments = await typeorm_1.createQueryBuilder("comment")
                .select("comments.id")
                .addSelect("comments.comment")
                .addSelect("comments.created_at")
                .addSelect("comments.episode_id")
                .from(CommentModel_1.CommentModel, "comments")
                .where("comments.episode_id = :id", { id: parseInt(id) })
                .getMany();
            let commentCount = comments ? comments.length : 0;
            mydata.commentCount = commentCount;
            output.push(mydata);
        }
        const sortedResult = output.sort((a, b) => b.release_date - a.release_date);
        return res.status(200).json({
            result: sortedResult,
        });
    }
    catch (error) {
        return res.status(404).json({
            status: "failing",
            error: error.message,
        });
    }
};
exports.getAll = getAll;
const getOne = async (req, res) => {
    let movieId = req.params.id;
    try {
        const data = await axios_1.default.get(`https://swapi.dev/api/films/${movieId}`);
        const id = 1;
        let output = {};
        output.title = data.data.title;
        output.episode_id = data.data.episode_id;
        output.opening_crawl = data.data.opening_crawl;
        output.release_date = data.data.release_date;
        const comments = await typeorm_1.createQueryBuilder("comment")
            .select("comments.id")
            .addSelect("comments.comment")
            .addSelect("comments.created_at")
            .addSelect("comments.episode_id")
            .from(CommentModel_1.CommentModel, "comments")
            .where("comments.episode_id = :id", { id: id })
            .getMany();
        let comment = comments ? comments : 'No Comment Available';
        output.comment = comment;
        return res.status(200).json({
            status: 'successful',
            result: output,
        });
    }
    catch (error) {
        return res.status(404).json({
            status: "failed",
            error: error.message,
        });
    }
};
exports.getOne = getOne;
//# sourceMappingURL=Films.js.map