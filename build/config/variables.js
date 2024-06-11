"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_REFRESH_SECRET = exports.JWT_REFRESH_EXPIRES_IN = exports.JWT_EXPIRES_IN = exports.JWT_SECRET = exports.DB = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: './.env' });
exports.PORT = process.env.PORT || 3500;
exports.DB = process.env.DB_URL || 'mongodb://localhost:27017';
exports.JWT_SECRET = process.env.JWT_SECRET || 'secret';
exports.JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';
exports.JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || '30d';
exports.JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'secret';
