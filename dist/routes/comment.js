"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const comment_1 = require("../controller/comment");
const router = express_1.default.Router();
router.post('/createComment/:id', comment_1.createComment);
router.get('/getAllComment', comment_1.getAllComment);
router.get('/getOne/:id', comment_1.getCommentById);
router.get('/one', comment_1.editComment);
exports.default = router;
//# sourceMappingURL=comment.js.map