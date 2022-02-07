import createError from 'http-errors'
import { Request, Response, NextFunction } from 'express';
import { Jwt } from "./../utils/jwt";

const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
        return next(new createError.Unauthorised('Access token is required !'))
    }

    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
        return next(new createError.Unauthorised())
    };

    await Jwt.signAccessToken(token).then(user => {
        req.user = user;
        next();
    }).catch(e => {
        next(new createError.Unauthorised(e.message))
    })
}

module.exports = checkAuth;