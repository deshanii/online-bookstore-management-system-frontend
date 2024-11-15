import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  public category = {
    name :'',
   
  };
  constructor(private http: HttpClient){}

  public addCategory(){
    console.log(this.category);

    this.http.post("http://localhost:8080/category/add-category",this.category).subscribe((data)=>{
  
      Swal.fire({
        title: "Category Added!",
        text: "You clicked the button!",
        icon: "success"
      });
      
        
    })
  }

}
