import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {isNullOrUndefined} from 'util';
import 'rxjs/add/operator/catch';
import {ErrorHandlerService} from "../error-handler-service/error-handler.service";
import {environment} from "../../../environments/environment";




const SERVER_URL = environment.baseURL;
const API_URL = '/api/';


@Injectable()
export class HttpRestService {

  constructor(private http: HttpClient,
              private errorHandler: ErrorHandlerService) {
  }

  get<T>(url: String, params?): Observable<T> {
    if (isNullOrUndefined(params)) {
      params = {};
    }
    params['requestTimestamp'] = new Date().getTime();
    const builtUrl = SERVER_URL + API_URL + url;
    return this.http.get<T>(builtUrl, {params: params, withCredentials: true})
      .catch((error: any) => this.errorHandler.handleError(error, url));
  }

}
