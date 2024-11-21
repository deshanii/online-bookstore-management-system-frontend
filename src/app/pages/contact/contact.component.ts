import { Component } from '@angular/core';
import { FooterComponent } from '../../common/footer/footer.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { NavBarComponent } from '../../common/nav-bar/nav-bar.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FooterComponent,NavBarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
