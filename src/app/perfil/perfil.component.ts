import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {Angular2TokenService} from "angular2-token";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.sass']
})
export class PerfilComponent implements OnInit {

  constructor(public authTokenService:Angular2TokenService,
    public authService:AuthService,
    private router:Router) { }

  ngOnInit() {
  }

  logOut(){
    this.authService.logOutUser().subscribe(() => this.router.navigate(['/'])) 
  }

}
