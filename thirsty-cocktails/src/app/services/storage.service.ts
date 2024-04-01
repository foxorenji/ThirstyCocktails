import {Injectable} from '@angular/core';
import {Theme, ThemeMode} from "../themes/models";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setItem(key: string, value: string): void {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  }

  getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item) as T;
    }
    return null;
  }

  covertToFlag(theme : ThemeMode) : boolean {
    return theme === Theme.Dark;
  }

  convertToStorageValue(theme : boolean) : string {
    return theme ? 'dark' : 'light'
  }

}
