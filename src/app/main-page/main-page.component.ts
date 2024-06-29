import { Component } from '@angular/core';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CarrouselComponent, SearchBarComponent, HeaderComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
