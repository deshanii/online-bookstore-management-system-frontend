import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserNavBarComponent } from '../user-nav-bar/user-nav-bar.component';

@Component({
  selector: 'app-user-main',
  standalone: true,
  imports: [RouterOutlet,UserNavBarComponent],
  templateUrl: './user-main.component.html',
  styleUrl: './user-main.component.css'
})
export class UserMainComponent {

}
