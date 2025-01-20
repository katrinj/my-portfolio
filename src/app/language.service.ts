import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private defaultLanguage = "et";

  private allSupportedLanguages = [
    {lang: "et", displayName: "EST"},
    {lang: "en", displayName: "ENG"}
  ]

  private allSupportedLanguageCodes: string[];
  private allSupportedLanguageDisplayNames: string[];
  private allNonDefaultLanguages: string[];

  private lang: string;

  constructor() { 
    this.allSupportedLanguageCodes = this.loadAllSupportedLanguageCodes();
    this.allSupportedLanguageDisplayNames = this.loadAllSupportedLanguageDisplayNames();
    this.allNonDefaultLanguages = this.loadAllNonDefaultLanguages();

    console.log("LanguageService: init: loading initial language from the url");
    this.lang = this.getCurrentLanguageFromUrl();
  }

  getCurrentLanguageFromUrl(): string {
    const path = window.location.pathname;
    console.log("base: " + window.location.origin + ", pathname: " + path);

    for (let i = 0; i < this.allNonDefaultLanguages.length; i++) {
      if (path.includes("/" + this.allNonDefaultLanguages[i]+"/")) {
        console.log("language found from the url: " + this.allNonDefaultLanguages[i]);
        return this.allNonDefaultLanguages[i];
      }
    }
    console.log("no specific language found from the url, retrieving the default language: " + this.defaultLanguage);
    return this.defaultLanguage;
  }

  getCurrentLanguage(): string {
    return this.lang;
  }

  getDefaultLanguage() {
    return this.defaultLanguage;
  }

  getAllSupportedLanguageCodes() {
    return this.allSupportedLanguageCodes;
  }

  getAllSupportedLanguageDisplayNames() {
    return this.allSupportedLanguageDisplayNames;
  }

  getAllNonDefaultLanguages() {
    return this.allNonDefaultLanguages;
  }

  changelanguage(newLang: string) {
    this.lang = newLang;
    console.log("LanguageService: language set to: " + this.lang);
  }

  private loadAllSupportedLanguageCodes(): string[] {
    return this.allSupportedLanguages.map(obj => obj.lang);
  }

  private loadAllSupportedLanguageDisplayNames(): string [] {
    return this.allSupportedLanguages.map(obj => obj.displayName);
  }

  private loadAllNonDefaultLanguages() : string[] {
    const allNonDefaultLanguages: string[] = []
    this.allSupportedLanguages.map(obj => obj.lang).forEach(lang => {
      if (lang != this.defaultLanguage) {
        allNonDefaultLanguages.push(lang);
      }
    })
    return allNonDefaultLanguages;
  }
}
