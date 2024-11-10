import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-books',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-books.component.html',
  styleUrl: './add-books.component.css'
})
export class AddBooksComponent {

  public book = {
    title :'',
    category : '',
    price : '',
    author : '',
    description : '',
  };
  constructor(private http: HttpClient){}

  public addBook(){
    console.log(this.book);

    this.http.post("http://localhost:8080/book/add-book",this.book).subscribe((data)=>{
  
        alert("book added!!!");
      
        
    })
  }

}
