import { Component, OnInit, ViewChild, ElementRef, NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Router, ActivatedRoute } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnInit {
  input: string = "";
  ngOnInit(): void {
    
  }
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.input = params['data'];
      // Fetch recipes or update the view based on the new data
    });
  }
  Search():void {
    this.router.navigate(['search-results'],  { queryParams: { data: this.input } }).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
  }
  
}