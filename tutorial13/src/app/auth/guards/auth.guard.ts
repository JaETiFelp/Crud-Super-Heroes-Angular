import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad, CanActivate {
  
  constructor(
    private authService:AuthService,
    private router: Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>  | Promise<boolean>  | boolean {
    //   if(this.authService.auth.id){
    //     return true;
    //   }
    // console.log('bloqueado por el cantActive..!!');  
    // return false;
    return this.authService.verificationAuth()
    .pipe(
      tap( estaAuthenticate => {
        if(!estaAuthenticate){
          this.router.navigate(['./auth/login']);
        }
      })
    );    
  } 

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean>  | Promise<boolean> | boolean   {
    //   if(this.authService.auth.id){
    //     return true;
    //   }
    // console.log('bloqueado por el cantLoad..!!');  
    // return false;
    return this.authService.verificationAuth()
    .pipe(
      tap( estaAuthenticate => {
        if(!estaAuthenticate){
          this.router.navigate(['./auth/login']);
        }
      })
    );
            
  }
}
