import {Component, OnDestroy} from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {DataService} from "../../services/data.service";
import {FormControl} from "@angular/forms";
import {debounceTime, Subject, takeUntil, tap} from "rxjs";
import {EMPTY_CHOICE} from "../../themes/models";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  public categories$ = this.data.getCategories();

  searchControl = new FormControl<string>('');

  private destroyed$ = new Subject<void>();

  public displayedRecipes$ = this.data.getCocktailsByFirstLetter('A');

  currentLetterIndex = 0; // Start with the first letter ('A' = index 0)
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  constructor(private theme: ThemeService, private data: DataService) {
    this.theme.set();

    this.searchControl.valueChanges.pipe(debounceTime(400),
      tap(term => {
        if (term?.length) {
          this.searchRecipes(term);
        } else {
          this.resetList();
        }
      }),
      takeUntil(this.destroyed$),
    ).subscribe();
  }


  fetchCocktailsByLetter() {
    const letter = this.alphabet[this.currentLetterIndex];
    this.displayedRecipes$ = this.data.getCocktailsByFirstLetter(letter);
  }

  goToLetter(forward: boolean): void {
    if (forward) {
      this.currentLetterIndex++;
    } else {
      this.currentLetterIndex--;
    }
    this.fetchCocktailsByLetter();
  }

  searchRecipes(term: string): void {
    this.displayedRecipes$ = this.data.search(term);

  }

  showBasedOnCategory(category: string): void {
    console.log(category);
    if (category === EMPTY_CHOICE) {
      this.searchControl.enable(); // preferable to emit because valueChange is triggered
    } else {
      this.displayedRecipes$ = this.data.getCocktailsByCategory(category);
      this.searchControl.disable({ emitEvent: false });
    }
  }

  private resetList(): void {
    this.currentLetterIndex = 0;
    this.fetchCocktailsByLetter();
  }

  public ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
