import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})

export class CarrouselComponent implements OnInit {

  meals: any[] = [];
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'; // Replace with your API endpoint

  constructor() { }

  ngOnInit(): void {
    this.fetchImages();
  }

  async fetchImages(): Promise<any> {
    for (let i = 0; i < 5; i++) {
      try {
        const response = await fetch(this.apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        this.meals.push(json.meals[0]);
      } catch (error) {
        console.error('Error fetching images:', error);
      }      
    }
  }
}
