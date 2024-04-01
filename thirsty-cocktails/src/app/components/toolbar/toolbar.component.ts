import { Component } from '@angular/core';
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'thirsty-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(public theme: ThemeService) {}

  toggleTheme() {
    this.theme.toggle();
  }
}
