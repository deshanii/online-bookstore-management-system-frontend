import { Component } from '@angular/core';
import { ContactComponent } from '../../pages/contact/contact.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-contact-us',
  standalone: true,
  imports: [ContactComponent,RouterLink],
  templateUrl: './user-contact-us.component.html',
  styleUrl: './user-contact-us.component.css'
})
export class UserContactUsComponent {

}
