import { Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    
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
