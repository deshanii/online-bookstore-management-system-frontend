import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-nav-bar.component.html',
  styleUrl: './user-nav-bar.component.css'
})
export class UserNavBarComponent {

  constructor(private router: Router) {}

  signOut(){
    //this.userService.setUser(null);
    this.router.navigate(['']);
  }

}
