import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-search-results-page',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, ScrollingModule, MatIcon],
  templateUrl: './search-results-page.component.html',
  styleUrl: './search-results-page.component.css'
})
export class SearchResultsPageComponent {
  mode: String = '';
  meals: any;
  result: String = '';
  error: boolean = false;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.result = params['data'];
      this.mode = params['mode'];
      this.fetchRecipes(this.result, this.mode);
      // Fetch recipes or update the view based on the new data
    });
  }
  fetchRecipes(name: String, mode: String) {
    let url :string;
    if(mode == 'normal')
      url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`   
    else if(mode == 'first')
      url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${name}` 
    else if(mode == 'id')
      url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`
    else 
      url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}` 
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
