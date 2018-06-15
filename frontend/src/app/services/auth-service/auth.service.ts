import {Injectable} from '@angular/core';
import {md5} from 'angular-md5';



@Injectable()
export class AuthService {

  constructor() {
  }

  convertToMD5(text: string) {
    let e = md5(text);
    console.log("hash: " + e);
    return e;
  }

}
