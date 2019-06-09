import * as jct from 'jsonwebtoken';
import { Request, Response } from 'express';

class Cookie {
  public static secret = 'mysecretsshhh';
  private payload: any;
  constructor(payload: any) {
    this.payload = payload;
  }
  public getCookieToken = () => {
    return jct.sign(this.payload, Cookie.secret, {
      expiresIn: '1h',
    });
  }

  public static withAuth = (req: Request, res: Response, next: any) => {
    const token =
      req.body.token ||
      req.query.token ||
      req.headers['x-access-token'] ||
      req.cookies.token;

    if (!token) {
      res.status(401).send('Unauthorized: No token provided');
    } else {
      jct.verify(token, Cookie.secret, (err: Error, decoded: any) => {
        if (err) {
          res.status(401).send('Unauthorized: Invalid token');
        } else {
          req.user = decoded.user;
          next();
        }
      });
    }
  }
}

export default Cookie;
