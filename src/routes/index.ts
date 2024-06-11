import { Router } from "express";

const rootRouter: Router = Router();

rootRouter.get("/", (req, res) => {
    res.send("Hello World!");
});


export default rootRouter