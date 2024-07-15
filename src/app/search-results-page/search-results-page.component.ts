import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-search-results-page',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './search-results-page.component.html',
  styleUrl: './search-results-page.component.css'
})
export class SearchResultsPageComponent {
  meals: any;
  result: String = '';
  error: boolean = false;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.result = params['data'];
      this.fetchRecipes(this.result);
      // Fetch recipes or update the view based on the new data
    });
  }
  fetchRecipes(name: String) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          this.error = true;
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Process the fetched data here
        console.log(data);
        this.meals = data;
      })
      .catch(error => {
        this.error = true;
        console.error('Error fetching recipes:', error);
      });
  }
}
