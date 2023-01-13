import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/auth.types';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
  .container{
    margin : 10px;
  }`
  ]
})
export class HomeComponent implements OnInit {
   //session!:Auth;//  ! = siempre  va ser ese valor
   cad:string='';
  get auth(){
    this.cad = this.authService.auth.username;
    console.log('llamoa funcoiommmm'+ this.cad)
    return this.authService.auth;
  }

  constructor(
              private router:Router,
              private authService: AuthService
              ) { }

  ngOnInit(): void {
    console.log('home usuaario: ');
    //this.cad = this.authService.auth.username;
    // this.cad= this.auth.username;
    console.log(this.authService.auth)
    console.log('nombre-> '+this.authService.auth.username)
    console.log(this.auth.username)
    
    console.log(this.cad);
    
  }

  logOut(){
    this.router.navigate(['./auth']);
  }
}

