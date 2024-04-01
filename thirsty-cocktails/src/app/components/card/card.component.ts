import {Component, Input} from '@angular/core';
import {Cocktail} from "../../themes/models";

@Component({
  selector: 'thirsty-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cocktail: Cocktail | undefined;

  get subtitle() : string {
    return `Contains: ${this.cocktail?.strIngredient1}, ${this.cocktail?.strIngredient2}, ${this.cocktail?.strIngredient3 ?? ''} etc. `
  }
}
