import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  query: string = '';
 

  constructor(private router : Router) { }
  ngOnInit(): void {
    
  }

  search(): void {
    this.router.navigate(['/results'], { queryParams: { query: this.query } });
  
  }
}
