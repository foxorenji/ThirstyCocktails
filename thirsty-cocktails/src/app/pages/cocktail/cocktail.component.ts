import {Component} from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {DataService} from "../../services/data.service";
import {ActivatedRoute} from "@angular/router";
import {take, tap} from "rxjs";
import {Cocktail} from "../../themes/models";

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent {

  cocktailId: string | null;

  cocktail: Cocktail | undefined;

  combinedIngredients: string[] = [];

  constructor(private theme: ThemeService,
              private data: DataService,
              private route: ActivatedRoute) {
    this.theme.set();

    this.cocktailId = this.route.snapshot.paramMap.get('id');

    if (this.cocktailId) {
      this.data.getCocktailById(this.cocktailId).pipe(
        tap(cocktail => {
          this.cocktail = cocktail;

          this.combinedIngredients = this.combineIngredientsAndMeasurements();
        }),
        take(1)
      ).subscribe();
    }
  }

  private combineIngredientsAndMeasurements(): string[] {
    let combined: string[] = [];

    if (this.cocktail) {
      for (let i = 1; i <= 10; i++) {
        const ingredientKey = `strIngredient${i}`;
        const measureKey = `strMeasure${i}`;
        const ingredient = this.cocktail[ingredientKey];
        const measure = this.cocktail[measureKey];

        if (ingredient && measure) {
          combined.push(`${measure.trim()} ${ingredient.trim()}`);
        } else if (ingredient) {
          combined.push(ingredient);
        }
      }

    }
    return combined.filter(item => item); // Filter out any undefined or empty entries
  }
}
