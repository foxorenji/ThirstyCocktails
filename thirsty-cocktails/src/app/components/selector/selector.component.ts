import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'thirsty-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {

  dropdownOpen = false;
  currentChoice = '';
  currentIndex = 0;
  @Input() categories : string[] = [];


  @Output('onChoose') chosen = new EventEmitter<string>();

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }

  choose(category: string, index: number) : void  {
    this.chosen.emit(category);
    this.currentChoice = category;
    this.currentIndex = index;
    this.closeDropdown();
  }

}
