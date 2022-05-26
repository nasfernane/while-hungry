import dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import createError from 'http-errors';
import { OAuth2Client } from 'google-auth-library';
import moment from 'moment';



dotenv.config();
export class Jwt {
  static signAccessToken(payload: Record<string, unknown>) {
    return new Promise((resolve, reject) => {
      jwt.sign(
        { payload },
        process.env['ACCESS_TOKEN_SECRET'] as string,
        {},
        (err, token) => {
          if (err) {
            reject(createError['InternalServeurError']);
          }
          resolve(token);
        }
      );
    });
  }

  static async verifyGoogleTOken(token: string) {
    const client = new OAuth2Client(process.env['GOOGLE_CLIENT_ID']);

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env['GOOGLE_CLIENT_ID'], 
    });
    const payload = ticket.getPayload();

    const validISS = payload.iss === 'https://accounts.google.com' ? true : false;
    const validAUD = payload.aud === process.env['GOOGLE_CLIENT_ID'] ? true : false;
    const validEXP = moment(payload.exp).isBefore(moment.now()) ? true : false;
    const validEmail = payload.email_verified;
    const email = payload.email;
    
    if (validISS && validAUD && validEXP && validEmail && email) {
      return email
    } else {
      return false;
    }
  }
}
