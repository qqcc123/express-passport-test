import { Request, Response, NextFunction } from "express";
import passport from "passport"
import { User, UserDocument, AuthToken } from "../models/User";
import { IVerifyOptions } from "passport-local";
import "../config/passport";

/**
 * Login page.
 * @route GET /login
 */
export const getLogoin = (req: Request, res: Response, next: NextFunction): void => {
    if (req.user) {
        return res.redirect("/");
    }
    res.render("account/login", {
        title: "login",
    });
}

/**
 * Sign in using email and password.
 * @route POST /login
 */
export const postLogin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    
    passport.authenticate("local", (err: Error, user: UserDocument, info: IVerifyOptions) => {

    })(req, res, next);

}