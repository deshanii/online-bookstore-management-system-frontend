import { Component } from '@angular/core';
import { CatagoriesComponent } from '../catagories/catagories.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { NavBarComponent } from '../../common/nav-bar/nav-bar.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CatagoriesComponent,FooterComponent,NavBarComponent,SearchBarComponent,RouterLink, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

 

}
