import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { SearchBarComponent } from '../../pages/search-bar/search-bar.component';

@Component({
  selector: 'app-manage-books',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule,SearchBarComponent],
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.css'] // Changed styleUrl to styleUrls
})
export class ManageBooksComponent {

  public bookList: any = [];

  constructor(private http: HttpClient) {
    this.loadTable();
  }

  loadTable() {
    this.http.get("http://localhost:8080/book/get-book").subscribe(data => {
      console.log(data);
      this.bookList = data;
    });
  }

  deleteBookById(bookId: any) {
    console.log('Deleting book with ID:', bookId);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:8080/book/delete-by-id/${bookId}`).subscribe({
          next: () => {
            Swal.fire({
              title: "Deleted!",
              text: "Your book has been deleted.",
              icon: "success"
            });
            this.loadTable();
          },
          error: (err) => {
            console.error('Error deleting book:', err);
            Swal.fire({
              title: "Error",
              text: "Failed to delete book.",
              icon: "error"
            });
          }
        });
      }
    });
  }

  public bookTemp: any = {};

  updateBook(book: any) {
    console.log(book);
    this.bookTemp = { ...book }; // Copy the book object to avoid direct reference
  }

  saveBook() {
    this.http.put("http://localhost:8080/book/update-book", this.bookTemp).subscribe({
      next: () => {
        Swal.fire({
          title: "Success",
          text: "Book Updated!",
          icon: "success"
        });
        this.loadTable();
      },
      error: (err) => {
        console.error('Error updating book:', err);
        Swal.fire({
          title: "Error",
          text: "Failed to update book.",
          icon: "error"
        });
      }
    });
  }
}
