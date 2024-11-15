import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
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

    let bodyData ={
      email: this.email,
      password: this.password,
    };

    this.http.post("http://localhost:8080/admin/login", bodyData).subscribe((resultData: any)=>{
      console.log(resultData);

      if(resultData.message == "Email does not exit"){
        alert("Email does not exit");

      }else if(resultData.message == "Login Success!"){
        this.router.navigateByUrl('/adminNavbar');

      }else{
        alert("Incorrect Email and Password not match");
      }

    });
  }

}
