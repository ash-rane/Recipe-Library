import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-showing-search-result',
  templateUrl: './showing-search-result.component.html',
  styleUrls: ['./showing-search-result.component.css']
})
export class ShowingSearchResultComponent implements OnInit {

  recipes: any[] = [];
  query: string = '';

  constructor(private route: ActivatedRoute, private dataservice : DataService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.query = params['query'];
      this.searchRecipes();
    });
  }

  searchRecipes(): void {
    if (this.query) {
      this.dataservice.searchRecipes(this.query).subscribe(
        data => {
          this.recipes = data.results;
        },
        error => {
          console.error('Error fetching recipes', error);
        }
      );
    }
  }
}
