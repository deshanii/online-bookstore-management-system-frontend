import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Book {
  bookId: number;
  profileImagePath: string;
  title: string;
  category: string;
  qty: number;
  price: number;
  author: string;
  description: string;
}
interface OrderItem {
  book: Book;
  quantity: number;
  price: number;
  subtotal: number;
}

interface Order {
  id?: number;
  date: string;
  orderItems: OrderItem[];
  total: number;
}

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [NgFor, CommonModule,RouterLink,FormsModule],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit{
  bookList: Book[] = [];
  loading: boolean = false;
  selectedBook: Book | null = null;
  cartQty: number = 1;
  cart: { book: Book; quantity: number }[] = [];
  placeOrderModalOpen: boolean = false;
  currentUser = {
    id:"1",
    name: "John Doe",
    email: "amal@gmail.com",
    password:"1234"
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.loading = true;
    this.http.get<Book[]>('http://localhost:8080/book/get-book').subscribe({
      next: (books: any[]) => {
        const baseUrl = 'http://localhost:8080';
        this.bookList = books.map((book) => ({
          ...book,
          profileImagePath: `${baseUrl}${book.profileImagePath}`
        }));
        this.loading = false;
      },
      error: (error: any) => {
        console.error('Error loading books:', error);
        this.bookList = [];
        this.loading = false;
      }
    });
  }

  openCartModal(book: any) {
    this.selectedBook = book;
    this.cartQty = 1; 
  }

  closeCartModal() {
    this.selectedBook = null;
  }

  addToCart(book: Book | null, qty: number) {
    if (!book) {
      console.error('Book is null or undefined');
      return;
    }

    if (qty > 0 && qty <= book.qty) {
      
      const existingItem = this.cart.find((item) => item.book.title === book.title);
      if (existingItem) {
        existingItem.quantity += qty;
      } else {
        this.cart.push({ book, quantity: qty });
      }

      
      const bookInList = this.bookList.find((b) => b.title === book.title);
      if (bookInList) {
        bookInList.qty -= qty;
      }

      console.log(`Added ${qty} of ${book.title} to cart.`);
      this.closeCartModal();
    } else {
      alert('Invalid quantity! Please enter a value between 1 and the available quantity.');
    }
  }

  removeFromCart(index: number) {
    const removedItem = this.cart.splice(index, 1)[0]; 
    if (removedItem) {
      const bookInList = this.bookList.find((b) => b.title === removedItem.book.title);
      if (bookInList) {
        bookInList.qty += removedItem.quantity; 
      }
    }
  }

  clearCart() {
    this.cart.forEach((item) => {
      const bookInList = this.bookList.find((b) => b.title === item.book.title);
      if (bookInList) {
        bookInList.qty += item.quantity;
      }
    });

    this.cart = []; 
  }

  openPlaceOrderModal() {
    this.placeOrderModalOpen = true;
  }

  closePlaceOrderModal() {
    this.placeOrderModalOpen = false;
  }

  calculateTotal() {
    return this.cart.reduce(
      (total, item) => total + item.book.price * item.quantity,
      0
    );
  }
  
  calculateTotalForPlaceOrder(orderItems: OrderItem[]): number {
    return orderItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
  
  placeOrder() {
    const orderItems: OrderItem[] = [];

    console.log(this.cart);
    
  
    for (const item of this.cart) {
      this.http.get<Book>(`http://localhost:8080/book/search-by-id/${item.book.bookId}`).subscribe({
        next: (bookDetails) => {
          const orderItem: OrderItem = {
            book: bookDetails, 
            quantity: item.quantity,
            price: bookDetails.price,  
            subtotal: bookDetails.price * item.quantity
          };

          console.log(bookDetails);
          console.log(orderItem);
          
  
          orderItems.push(orderItem);


  
          if (orderItems.length === this.cart.length) {
            const order: Order = {
              date: "2024-11-21",
              orderItems: orderItems,
              total: this.calculateTotalForPlaceOrder(orderItems) 
            };
  
            console.log(order);
  
            this.http.post('http://localhost:8080/order/add-order', order).subscribe({
              next: (response) => {
                console.log('Order placed successfully:', response);
                this.clearCart(); 
                alert('Order placed successfully!');
                this.closePlaceOrderModal();
              },
              error: (error) => {
                console.error('Error placing order:', error);
                alert('Failed to place the order. Please try again.');
              }
            });
          }
        },
        error: (error) => {
          console.error('Error fetching book details:', error);
          alert('Failed to fetch book details. Please try again.');
        }
      });
    }
  }
    
}

