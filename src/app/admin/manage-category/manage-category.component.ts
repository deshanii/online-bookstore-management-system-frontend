import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-category',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './manage-category.component.html',
  styleUrl: './manage-category.component.css'
})
export class ManageCategoryComponent {

  public categoryList: any = [];

  constructor(private http: HttpClient) {
    this.loadTable();
  }

  loadTable() {
    this.http.get("http://localhost:8080/category/get-category").subscribe(data => {
      console.log(data);
      this.categoryList = data;
    });
  }

  deleteCategoryById(categoryId: any) {
    console.log('Deleting category with ID:', categoryId);

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
        this.http.delete(`http://localhost:8080/category/delete-by-id/${categoryId}`).subscribe({
          next: () => {
            Swal.fire({
              title: "Deleted!",
              text: "Your category has been deleted.",
              icon: "success"
            });
            this.loadTable();
          },
          error: (err) => {
            console.error('Error deleting category:', err);
            Swal.fire({
              title: "Error",
              text: "Failed to delete category.",
              icon: "error"
            });
          }
        });
      }
    });
  }

  public categoryTemp: any = {};

  updateCategory(category: any) {
    console.log(category);
    this.categoryTemp = { ...category }; // Copy the book object to avoid direct reference
  }

  saveCategory() {
    this.http.put("http://localhost:8080/category/update-category", this.categoryTemp).subscribe({
      next: () => {
        Swal.fire({
          title: "Success",
          text: "Category Updated!",
          icon: "success"
        });
        this.loadTable();
      },
      error: (err) => {
        console.error('Error updating category:', err);
        Swal.fire({
          title: "Error",
          text: "Failed to update category.",
          icon: "error"
        });
      }
    });
  }

}
