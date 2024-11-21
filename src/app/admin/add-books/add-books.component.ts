import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

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
    qty: 1,
  };
  public selectedFile: File | null = null;

  constructor(private http: HttpClient){}

  public onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  public addBook(){
    if (!this.book.title || !this.book.category || !this.book.price || !this.book.author || !this.book.description) {
        Swal.fire({
            title: "Validation Error!",
            text: "Please fill in all required fields.",
            icon: "error"
        });
        return; 
    }

    if (this.book.qty <= 0 || !Number.isInteger(this.book.qty)) {
        Swal.fire({
            title: "Validation Error!",
            text: "Quantity must be a positive number.",
            icon: "error"
        });
        return; 
    }

    const formData = new FormData();
    formData.append('title', this.book.title);
    formData.append('category', this.book.category);
    formData.append('qty', this.book.qty.toString());
    formData.append('price', this.book.price);
    formData.append('author', this.book.author);
    formData.append('description', this.book.description);
    if (this.selectedFile) {
      formData.append('profileImage', this.selectedFile);
    }

    this.http.post("http://localhost:8080/book/add-book", formData).subscribe((data) => {
      Swal.fire({
        title: "Book Added!",
        text: "You clicked the button!",
        icon: "success"
      });

      this.book = {
        title: '',
        category: '',
        price: '',
        author: '',
        description: '',
        qty: 1,
      };
      this.selectedFile = null; 
    });
  }

}