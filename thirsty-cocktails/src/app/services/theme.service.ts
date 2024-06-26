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
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark');
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
      document.documentElement.classList.add('dark');
    }
    else {
      document.documentElement.classList.remove('dark');
    }
  }
}
