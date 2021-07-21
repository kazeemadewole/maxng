"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const databaseConnect_1 = __importDefault(require("./databaseConnect"));
const index_1 = __importDefault(require("./routes/index"));
const character_1 = __importDefault(require("./routes/character"));
const comment_1 = __importDefault(require("./routes/comment"));
const app = express_1.default();
databaseConnect_1.default();
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(morgan_1.default("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use("/", index_1.default);
app.use("/comment", comment_1.default);
app.use("/character", character_1.default);
app.use(function (req, res, next) {
    next(http_errors_1.default(404));
});
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500);
    res.render("error");
});
exports.default = app;
//# sourceMappingURL=app.js.map