import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NavBarComponent } from '../../common/nav-bar/nav-bar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,NavBarComponent,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = "";
  password : string ="";

  constructor(private router:Router, private http: HttpClient){}

  Login(){
    console.log(this.email);
    console.log(this.password);

    if(this.email==='admin@gmail.com'){
        this.router.navigateByUrl('/admin-main/admin-dashboard');
        return;
    }

    let bodyData ={
      email: this.email,
      password: this.password,
    };

    this.http.post("http://localhost:8080/user/login", bodyData).subscribe((resultData: any)=>{
      console.log(resultData);

      if(resultData.message == "Email does not exit"){
        alert("Email does not exit");

      }else if(resultData.message == "Login Success!"){
        this.router.navigateByUrl('/user-main/user-dashboard');

      }else{
        alert("Incorrect Email and Password not match");
      }

    });
  }

}
