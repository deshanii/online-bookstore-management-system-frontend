import { Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AddBooksComponent } from './admin/add-books/add-books.component';
import { ManageBooksComponent } from './admin/manage-books/manage-books.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminNavBarComponent } from './admin/admin-nav-bar/admin-nav-bar.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { ManageCategoryComponent } from './admin/manage-category/manage-category.component';

export const routes: Routes = [
   
    {
        path: "add-book",
        component: AddBooksComponent
    },


    {
        path: "manage-book",
        component: ManageBooksComponent
    },
    {
        path: "add-category",
        component: AddCategoryComponent
    },

    {
        path: "manage-category",
        component: ManageCategoryComponent
    },
    
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "about-us",
        component: AboutUsComponent
    },
    {
        path: "dashboard",
        component: DashboardComponent
    },
    
    {
        path: "login",
        component: LoginComponent
    },

    {
        path: "register",
        component: SignupComponent
    },
    {
        path: "adminNavbar",
        component: AdminNavBarComponent
    },

    {
        path: "**",
        redirectTo: "dashboard",
        // component:NavBarComponent
    }
];
