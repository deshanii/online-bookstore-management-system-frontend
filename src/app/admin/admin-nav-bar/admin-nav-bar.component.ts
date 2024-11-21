import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-nav-bar.component.html',
  styleUrl: './admin-nav-bar.component.css'
})
export class AdminNavBarComponent {

  constructor(private router: Router) {}

  signOut(){
    //this.userService.setUser(null);
    this.router.navigate(['']);
  }
}
