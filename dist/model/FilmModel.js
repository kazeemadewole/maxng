"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmModel = void 0;
const typeorm_1 = require("typeorm");
let FilmModel = class FilmModel extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], FilmModel.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], FilmModel.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], FilmModel.prototype, "episode_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], FilmModel.prototype, "opening_crawl", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], FilmModel.prototype, "director", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], FilmModel.prototype, "producer", void 0);
__decorate([
    typeorm_1.Column({
        type: "date",
    }),
    __metadata("design:type", String)
], FilmModel.prototype, "release_date", void 0);
__decorate([
    typeorm_1.Column({ type: "simple-array", default: [] }),
    __metadata("design:type", Array)
], FilmModel.prototype, "characters", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        type: "date",
    }),
    __metadata("design:type", String)
], FilmModel.prototype, "created", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        type: "date",
    }),
    __metadata("design:type", String)
], FilmModel.prototype, "edited", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], FilmModel.prototype, "url", void 0);
FilmModel = __decorate([
    typeorm_1.Entity("movie")
], FilmModel);
exports.FilmModel = FilmModel;
//# sourceMappingURL=FilmModel.js.map