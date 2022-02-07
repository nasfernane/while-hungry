import  dotenv  from 'dotenv';
import * as jwt from 'jsonwebtoken';
import  createError  from 'http-errors';

dotenv.config();
export class Jwt {
  static signAccessToken(payload: Record<string, unknown>) {
    return new Promise((resolve, reject) => {
      jwt.sign({ payload }, process.env['ACCESS_TOKEN_SECRET'] as string, {
      }, (err, token) => {
          if (err) {
              reject(createError['InternalServeurError'])
          }
          resolve(token)
      })
    })
  }

  static verifyAccessToken(token: string) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, process.env['ACCESS_TOKEN_SECRET'] as string, (err, payload) => {
          if (err) {
              const message = err.name == 'JsonWebTokenError' ? 'Unauthorised' : err.message
              return reject(new createError['Unauthorised'](message))
          }
          resolve(payload)
      })
    })
  }
}
