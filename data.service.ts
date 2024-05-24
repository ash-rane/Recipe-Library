import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiKey = '914e6d313842403a9ca39e080746a5a3';
  private apiUrl = 'https://api.spoonacular.com/recipes/complexSearch';
  

  constructor(private _httpService : HttpClient) { 
 }
 searchRecipes(query: string): Observable<any> {
  return this._httpService.get<any>(`${this.apiUrl}?apiKey=${this.apiKey}&query=${query}`);
}

getRecipeDetails(id: string): Observable<any> {
  return this._httpService.get<any>(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${this.apiKey}`);
}


}
