import { Router, Response, Request, NextFunction } from "express";
import express from "express";
import path from "path";

const dashboardRouter: Router = Router();

dashboardRouter.use(express.static(path.join(__dirname, "../../../dashboard/dist")));

dashboardRouter.use((req: Request, res: Response, next: NextFunction) => {
    res.sendFile("index.html", { root: path.join(__dirname, "../../../dashboard/dist") });
});

export default dashboardRouter;
