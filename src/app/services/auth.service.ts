import { Injectable } from '@angular/core';
import {Angular2TokenService} from "angular2-token";
import {Subject, Observable} from "rxjs";
import {Response} from "@angular/http";
import { retryWhen } from 'rxjs/operator/retryWhen';

@Injectable()
export class AuthService {

  userSignedIn$:Subject<boolean> = new Subject();
  constructor(public authService:Angular2TokenService) {
    this.authService.validateToken().subscribe(
      res => res.status == 200 ? this.userSignedIn$.next(res.json().success == true) : this.userSignedIn$.next(false)

    )
   }

   logOutUser():Observable<Response>{
     return this.authService.signOut().map(
       res => {
         this.userSignedIn$.next(false);
         return res;
       }
     )
   }

   registerUser(SignUpData: {email:string, password:string, passwordConfirmation:string}):Observable<Response>{
     return this.authService.registerAccount(SignUpData).map(
       res => {
         this.userSignedIn$.next(true);
         return res;
       }
     )
   }

   logInUser(SignInData: {email:string, password:string}):Observable<Response>{
     return this.authService.signIn(SignInData).map(
       res=> {
         this.userSignedIn$.next(true);
         return res;
       }
     )
   }

}
