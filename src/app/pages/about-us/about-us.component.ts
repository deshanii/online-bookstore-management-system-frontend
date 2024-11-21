import { Component } from '@angular/core';
import { FooterComponent } from '../../common/footer/footer.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { NavBarComponent } from '../../common/nav-bar/nav-bar.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [FooterComponent,NavBarComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

  
}
