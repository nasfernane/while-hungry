import  dotenv  from 'dotenv';
import * as jwt from 'jsonwebtoken';
import  createError  from 'http-errors';

dotenv.config();
export class Jwt {
  static signAccessToken(payload: Record<string, unknown>) {
    console.log('sign access token')
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
}
