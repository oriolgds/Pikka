import { Component, OnInit, ViewChild, ElementRef, NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, FloatLabelType, } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    MatRadioModule, 
    MatMenuModule, 
    FormsModule, 
    MatSelectModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnInit {
  dynamicLabel: string = 'Search a receipe you want';
  advancedSearch: string = 'normal';
  changedToAdvancedSearch: boolean = false;
  input: string = "";
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.input = params['data'];
      this.advancedSearch = params['mode'];
      // Fetch recipes or update the view based on the new data
    });
  }
  ngOnInit(): void {
  }
  ChangeDynamicLabel(): void {
    if(this.advancedSearch != 'normal') this.changedToAdvancedSearch = true;
    if (this.advancedSearch == 'normal') {
      this.dynamicLabel = 'Searching in standard mode';
    }
    else if (this.advancedSearch == 'first') {
      this.dynamicLabel = 'Searching by first letter';
    }
    else if (this.advancedSearch == 'id') {
      this.dynamicLabel = 'Searching by id';
    }
    this.Search();
  }
  Search(): void {
    this.router.navigate(['search-results'], { queryParams: { data: this.input, mode: this.advancedSearch } }).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
  }

}