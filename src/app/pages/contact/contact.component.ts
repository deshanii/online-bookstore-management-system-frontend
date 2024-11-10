import { Component } from '@angular/core';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
