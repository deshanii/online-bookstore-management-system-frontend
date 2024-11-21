import { Component } from '@angular/core';
import { AdminNavBarComponent } from '../admin-nav-bar/admin-nav-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-main',
  standalone: true,
  imports: [AdminNavBarComponent,RouterOutlet],
  templateUrl: './admin-main.component.html',
  styleUrl: './admin-main.component.css'
})
export class AdminMainComponent {

}
