import { Component } from '@angular/core';
import {Angular2TokenService} from "angular2-token";
import {environment} from "../environments/environment";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  constructor(private autnToken: Angular2TokenService){
    this.autnToken.init(environment.token_auth_config);

    this.autnToken.signIn({email: "oscar@gmail.com", password: "12345678"}).subscribe(
      
      res => {
        console.log('auth response:', res);
        console.log('auth response headers: ', res.headers.toJSON());
        console.log('auth response body: ', res.json());
      },
      err => {
        console.error('auth error', err);
      }

    )
  }


}
