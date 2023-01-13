import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {  
 name :string =''
  constructor(
    private router: Router,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
  }
  login(){
    this.authService.login()
    .subscribe( resp =>{
      if(resp.id){
        console.log(' login usuario : ')
        console.log(resp)
        console.log(this.authService.auth)
        this.name = this.authService.auth.username;
        console.log('name :'+this.name)
        this.router.navigate(['./heroes']);
      }
    });
    
  }

}
