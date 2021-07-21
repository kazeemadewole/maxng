"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const commentValidation = (data) => {
    let schema = joi_1.default.object({
        comment: joi_1.default.string().required()
    });
    return schema.validate(data);
};
exports.commentValidation = commentValidation;
//# sourceMappingURL=CommentValidation.js.map