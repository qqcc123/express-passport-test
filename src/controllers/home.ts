import { Response, Request, NextFunction } from "express";

/**
 * Home page.
 * @route GET /
 */
export const homePage = (req: Request, res: Response, next: NextFunction) => {
    res.render("home", {
        title: "home",
        filename: "home1"
    })
}