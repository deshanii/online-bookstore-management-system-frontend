import { Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AddBooksComponent } from './admin/add-books/add-books.component';
import { ManageBooksComponent } from './admin/manage-books/manage-books.component';

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
        path: "**",
        redirectTo: "dashboard"
    }
];
