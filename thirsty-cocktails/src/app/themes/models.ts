export enum Theme {
  Dark = 'dark',
  Light = 'light'
}

export type ThemeMode = Theme.Dark | Theme.Light;

export const EMPTY_CHOICE = 'Select...'

export interface Cocktail {
  [key: string]: string | null; // for properties like ingredients/measures
  dateModified: string;
  idDrink: string;
  strAlcoholic: string;
  strCategory: string;
  strDrink: string;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2 : string;
  strIngredient3 : string;
  strInstructions: string;

}
