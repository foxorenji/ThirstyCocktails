import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Cocktail, EMPTY_CHOICE} from "../themes/models";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private categoriesURL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';


  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<string[]> {
    return this.http.get<{ drinks: Cocktail[] }>(this.categoriesURL).pipe(
      map(response => [EMPTY_CHOICE].concat(response.drinks.map(drink => drink.strCategory).sort((a, b) => a.localeCompare(b))))
    );
  }

  getCocktailsByFirstLetter(letter: string): Observable<any> {
    return this.http.get<{
      drinks: { strCategory: string }[]
    }>(`${this.apiUrl}search.php?f=${letter}`).pipe(map(response => response.drinks));
  }

  search(term: string): Observable<any> {
    return this.http.get<{ drinks: { strCategory: string }[] }>(`${this.apiUrl}search.php?s=${term}`).pipe(
      map(response => response.drinks));
  }

  getCocktailsByCategory(category: string): Observable<any> {
    return this.http.get<{ drinks: Cocktail[] }>(`${this.apiUrl}filter.php?c=${category}`).pipe(
      map(response => response.drinks));
  }

  getCocktailById(id: string): Observable<any> {
    return this.http.get<{ drinks: Cocktail[] }>(`${this.apiUrl}lookup.php?i=${id}`).pipe(
      map(response => response.drinks[0]));
  }

}
