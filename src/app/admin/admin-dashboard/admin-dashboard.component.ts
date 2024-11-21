import { Component } from '@angular/core';
import { CatagoriesComponent } from '../../pages/catagories/catagories.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CatagoriesComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
