import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map,tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../auth.types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string = environment.baseUrl;
  private _auth: Auth | undefined ;// para guardar valor del usuario loggeado

  get auth(): Auth {
    return {...this._auth!};
  }
  constructor(private http:HttpClient) { }

  verificationAuth():Observable<boolean>{
   if(! localStorage.getItem('token')){
      return of(false)
    //  return false;
    }
    
   return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
   .pipe(
    map( auth => {
      console.log('map',auth);
      this._auth  = auth
      console.log('auth ',this._auth)
      return true;
    })
   );
  }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe(//Tap se ejecuta antes de llegar al subscribe
      tap(auth=> {
        this._auth= auth
      }),
      tap(auth=> localStorage.setItem('token', auth.id)),
    );
  }
}
