import { Component } from '@angular/core';
import { CatagoriesComponent } from '../catagories/catagories.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CatagoriesComponent,FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

 

}
