import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { response } from 'express';
import Swal from 'sweetalert2';
import { NavBarComponent } from '../../common/nav-bar/nav-bar.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,NavBarComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {


  name: string="";
  email: string ="";
  password: string="";

  constructor(private http:HttpClient){}

  save(){
    let bodyData = {
      "name" : this.name,
      "email" : this.email,
      "password" : this.password
    };
    this.http.post("http://localhost:8080/admin/save",bodyData,{responseType : 'text'}).subscribe((resultData: any)=>{
      console.log(resultData);
      Swal.fire({
        title: "Registered Successfully!",
        text: "You clicked the button!",
        icon: "success"
      });
    });

  }

}
