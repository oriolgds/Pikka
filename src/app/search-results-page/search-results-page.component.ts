import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-results-page',
  standalone: true,
  imports: [],
  templateUrl: './search-results-page.component.html',
  styleUrl: './search-results-page.component.css'
})
export class SearchResultsPageComponent {
  result :String = '';
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.result = navigation.extras.state['data'];
      console.log(this.result)
    }
  }
}
