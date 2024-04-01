import {Injectable} from '@angular/core';
import {StorageService} from "./storage.service";
import {Theme, ThemeMode} from "../themes/models";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor(private storage: StorageService) {
  }

  public isDarkMode = false;

  toggle(): void {
    document.documentElement.classList.toggle('dark');
    this.isDarkMode = !this.isDarkMode;
    this.setThemeToStorage();
  }

  setThemeToStorage(): void {
    const currentTheme = this.storage.convertToStorageValue(this.isDarkMode);
    this.storage.setItem('theme', currentTheme);
  }

  pullThemeFromStorage(): ThemeMode {
    return this.storage.getItem<ThemeMode>('theme') ?? Theme.Light;
  }

  set(): void {
    const theme = this.pullThemeFromStorage();
    if (theme === Theme.Dark) {
      this.toggle();
    }
  }
}
