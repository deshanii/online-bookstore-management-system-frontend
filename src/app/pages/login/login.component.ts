import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // logiObj: any ={
  //   "EmailId": "",
  //   "Password": ""
  // };

  // http= inject(HttpClient);

  // onLogin(){
  //   this.http.post("http://localhost:8080/login", this.logiObj).subscribe((res:any)=>{
  //     if(res.result){
  //       alert("Login Success")
  //     }
  //   })
  // }

}
