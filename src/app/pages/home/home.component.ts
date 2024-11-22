import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { CatagoriesComponent } from '../catagories/catagories.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchBarComponent, CatagoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
