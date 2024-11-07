import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { CatagoriesComponent } from './pages/catagories/catagories.component';
import { FooterComponent } from './common/footer/footer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent,DashboardComponent,AboutUsComponent,CatagoriesComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OBMS';
}
