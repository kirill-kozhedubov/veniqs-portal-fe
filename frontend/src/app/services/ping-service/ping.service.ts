import {Injectable} from '@angular/core';
import {HttpRestService} from "../http-rest-service/http-rest.service";


@Injectable()
export class PingService {
  private pingURL = 'peepee/ping';

  constructor(private httpRest: HttpRestService,) {
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  ping() {
    return this.httpRest.get<any>(this.pingURL).subscribe(data => {
      console.log(data);
    });
  }
}
