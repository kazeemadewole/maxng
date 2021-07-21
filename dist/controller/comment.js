"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.editComment = exports.getAllComment = exports.getCommentById = exports.createComment = void 0;
const CommentModel_1 = require("../model/CommentModel");
const typeorm_1 = require("typeorm");
const CommentValidation_1 = require("../JoiValidation/CommentValidation");
const createComment = async (req, res) => {
    const { error } = CommentValidation_1.commentValidation(req.body);
    if (error) {
        return res.status(404).json({
            status: 'failed',
            error: error.details[0].message
        });
    }
    const { comment } = req.body;
    const episode_id = parseInt(req.params.id);
    try {
        const AddComment = CommentModel_1.CommentModel.create({
            episode_id,
            comment
        });
        await AddComment.save();
        return res.status(201).json({
            status: 'successfull',
            data: AddComment,
        });
    }
    catch (error) {
        return res.status(404).json({
            status: 'failed',
            error: error.message
        });
    }
};
exports.createComment = createComment;
const getCommentById = async (req, res) => {
    const id = req.params.id;
    try {
        const comments = await typeorm_1.createQueryBuilder("comment")
            .select("comments.id")
            .addSelect("comments.comment")
            .addSelect("comments.created_at")
            .addSelect("comments.episode_id")
            .from(CommentModel_1.CommentModel, "comments")
            .where("comments.episode_id = :id", { id: parseInt(id) })
            .getMany();
        return res.status(201).json({
            status: 'successful',
            comments
        });
    }
    catch (error) {
        res.status(404).json({
            status: 'failed',
            error: error.message
        });
    }
};
exports.getCommentById = getCommentById;
const getAllComment = async (req, res) => {
    try {
        const comments = await typeorm_1.createQueryBuilder("comment")
            .select("comments.id")
            .addSelect("comments.comment")
            .addSelect("comments.created_at")
            .addSelect("comments.episode_id")
            .from(CommentModel_1.CommentModel, "comments")
            .getMany();
        return res.status(201).json({
            status: 'successful',
            comments
        });
    }
    catch (error) {
        res.status(404).json({
            status: 'failed',
            error: error.message
        });
    }
};
exports.getAllComment = getAllComment;
const editComment = (req, res) => {
    console.log('edited comment');
    return res.status(200).json({
        message: 'message'
    });
};
exports.editComment = editComment;
const deleteComment = (req, res) => {
};
exports.deleteComment = deleteComment;
//# sourceMappingURL=comment.js.map