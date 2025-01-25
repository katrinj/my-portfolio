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

  private lang: string;

  constructor() { 
    this.allSupportedLanguageCodes = this.loadAllSupportedLanguageCodes();
    this.allSupportedLanguageDisplayNames = this.loadAllSupportedLanguageDisplayNames();

    console.log("LanguageService: init: loading initial language from the url");
    this.lang = this.getCurrentLanguageFromUrl();
  }

  getCurrentLanguageFromUrl(): string {
    const defaultLanguage = navigator.language;
    console.log("user default language: " + defaultLanguage);
    const path = window.location.pathname;
    const baseURI = document.baseURI;
    console.log("base: " + window.location.origin + ", pathname: " + path);
    console.log("baseURI: " + document.baseURI);

    for (let i = 0; i < this.allSupportedLanguageCodes.length; i++) {
      if (baseURI.includes("/" + this.allSupportedLanguageCodes[i]+"/")) {
        console.log("language found from the url: " + this.allSupportedLanguageCodes[i]);
        return this.allSupportedLanguageCodes[i];
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

}
