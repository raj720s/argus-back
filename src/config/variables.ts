import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
export const PORT = process.env.PORT || 3500;
export const DB = process.env.DB_URL || 'mongodb://localhost:27017';
export const JWT_SECRET = process.env.JWT_SECRET || 'secret';
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';
export const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || '30d';
export const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'secret';