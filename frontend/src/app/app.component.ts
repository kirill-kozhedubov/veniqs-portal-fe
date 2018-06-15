import {Component} from '@angular/core';
import {PingService} from "./services/ping-service/ping.service";
import {AuthService} from "./services/auth-service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private pingService: PingService,
              private authService: AuthService){

  }

  ping() {
    this.pingService.ping();
    this.authService.convertToMD5("lul");
  }


}
