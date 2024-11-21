import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Book {
  profileImagePath: string;
  title: string;
  category: string;
  qty: number;
  price: number;
  author: string;
  description: string;
}

@Component({
  selector: 'app-catagories',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.css']
})
export class CatagoriesComponent implements OnInit {
  bookList: Book[] = [];
  loading: boolean = false;
  selectedBook: Book | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.loading = true;
    this.http.get<Book[]>('http://localhost:8080/book/get-book').subscribe({
      next: (books) => {
        const baseUrl = 'http://localhost:8080';
        this.bookList = books.map((book) => ({
          ...book,
          profileImagePath:  `${baseUrl}${book.profileImagePath}`
        }));
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading books:", error);
        this.bookList = [];
        this.loading = false;
      }
    });
  }

  openDetails(book: Book) {
    this.selectedBook = book;
  }

  closeDetails() {
    this.selectedBook = null;
  }
}