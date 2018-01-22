import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Angular2TokenService} from "angular2-token";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  SignInUser = {
    email:'',
    password:''
  }

  @Output() onFormResult = new EventEmitter<any>();
  constructor( private tokenAuthSerivce:Angular2TokenService, public authService:AuthService) { }

  

  ngOnInit() {
  }

  onSignInSubmit(){
    this.authService.logInUser(this.SignInUser).subscribe(
      res => {
        if(res.status == 200){
          this.onFormResult.emit({signIn: true, res});
        }
      },
      err => {
        console.log('err:', err);
        this.onFormResult.emit({signIn: false, err});
      }
    )
  }
}
