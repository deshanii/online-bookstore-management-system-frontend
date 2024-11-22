import { Component, AfterViewInit } from '@angular/core';
import { FooterComponent } from '../../common/footer/footer.component';
import { NavBarComponent } from '../../common/nav-bar/nav-bar.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FooterComponent, NavBarComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'], 
})
export class ContactComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const accordionItems: NodeListOf<HTMLDivElement> = document.querySelectorAll('.accordion-item');

    accordionItems.forEach((item) => {
      const title = item.querySelector<HTMLDivElement>('.accordion-title');
      const content = item.querySelector<HTMLDivElement>('.accordion-inner');

      title?.addEventListener('click', () => {
        const isExpanded = item.getAttribute('aria-expanded') === 'true';

        accordionItems.forEach((otherItem) => {
          otherItem.setAttribute('aria-expanded', 'false');
          const otherContent = otherItem.querySelector<HTMLDivElement>('.accordion-inner');
          if (otherContent) {
            otherContent.style.display = 'none';
          }
        });

        if (!isExpanded) {
          item.setAttribute('aria-expanded', 'true');
          if (content) {
            content.style.display = 'block';
          }
        }
      });
    });
  }
}
