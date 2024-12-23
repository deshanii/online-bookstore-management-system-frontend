import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { CatagoriesComponent } from './pages/catagories/catagories.component';
import { FooterComponent } from './common/footer/footer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AddBooksComponent } from './admin/add-books/add-books.component';
import { ManageBooksComponent } from './admin/manage-books/manage-books.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminNavBarComponent } from './admin/admin-nav-bar/admin-nav-bar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { ManageCategoryComponent } from './admin/manage-category/manage-category.component';
import { SearchBarComponent } from './pages/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    DashboardComponent,
    AboutUsComponent,
    CatagoriesComponent,
    FooterComponent,
    AddBooksComponent,
    ManageBooksComponent,
    LoginComponent,
    ContactComponent,
    AdminNavBarComponent,
    SignupComponent,
    AddCategoryComponent,
    ManageCategoryComponent,
    SearchBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OBMS';
}
