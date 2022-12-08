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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceController = void 0;
const common_1 = require("@nestjs/common");
const add_price_dto_1 = require("./dto/add-price.dto");
const price_service_1 = require("./price.service");
let PriceController = class PriceController {
    constructor(priceService) {
        this.priceService = priceService;
    }
    create(addPriceDto) {
        return this.priceService.addPrice(addPriceDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_price_dto_1.AddPriceDto]),
    __metadata("design:returntype", void 0)
], PriceController.prototype, "create", null);
PriceController = __decorate([
    (0, common_1.Controller)('price'),
    __metadata("design:paramtypes", [price_service_1.PriceService])
], PriceController);
exports.PriceController = PriceController;
//# sourceMappingURL=price.controller.js.map