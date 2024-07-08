import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})

export class CarrouselComponent implements OnInit {
  refreshButtonText: string = 'Refresh';

  meals: any[] = [];
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'; // Replace with your API endpoint

  constructor(private router: Router) { }

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
  Reload(): void {
    this.refreshButtonText = 'Refreshing...';
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
  
}
