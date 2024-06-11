
import { Request, Response, NextFunction } from "express";

export const invalidRouteCatcher = (req: Request, res: Response, next: NextFunction) => {
    return res.status(404).json({ message: "Invalid route" });
}
