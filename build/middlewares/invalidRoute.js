"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidRouteCatcher = void 0;
const invalidRouteCatcher = (req, res, next) => {
    return res.status(404).json({ message: "Invalid route" });
};
exports.invalidRouteCatcher = invalidRouteCatcher;
