import { Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: "about-us",
        component: AboutUsComponent
    },
    {
        path: "**",
        redirectTo: "dashboard"
    },
    {
        path: "dashboard",
        component: DashboardComponent
    }
];
