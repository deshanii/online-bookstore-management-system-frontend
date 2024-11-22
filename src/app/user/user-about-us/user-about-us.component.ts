import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AboutUsComponent } from '../../pages/about-us/about-us.component';

@Component({
  selector: 'app-user-about-us',
  standalone: true,
  imports: [AboutUsComponent ,RouterLink],
  templateUrl: './user-about-us.component.html',
  styleUrl: './user-about-us.component.css'
})
export class UserAboutUsComponent {

}
