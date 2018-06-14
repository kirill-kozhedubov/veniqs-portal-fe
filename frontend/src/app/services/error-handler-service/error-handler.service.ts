import {ErrorHandler, Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';

@Injectable()
export class ErrorHandlerService {

  private _errorNotification$ = new Subject();
  public errorNotification = this._errorNotification$.asObservable();

  constructor() {
  };

  public handleError(error: any, calledMethodUrl: String) {
    console.log("EXCEPTION:::::::::::::::::");
    console.error(`${calledMethodUrl} url was called with ${error.message}.`);

    /*    if (calledMethodUrl.indexOf('methodName') !== -1) {
          console.log('Non-critical error');
        } else */
    this._errorNotification$.next(error);
    //do something when error thrown
    return Observable.throw(error);
  }
}
