"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Films_1 = require("../controller/Films");
const router = express_1.default.Router();
router.get('/', Films_1.getAll);
router.get('/:id', Films_1.getOne);
exports.default = router;
//# sourceMappingURL=index.js.map