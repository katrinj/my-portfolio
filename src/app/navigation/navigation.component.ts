import { AfterViewInit, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements AfterViewInit {
  languageService: LanguageService = inject(LanguageService)

  ngAfterViewInit(): void {
    console.log("NavigationComponent: afterviewinit: loading language selector value from language service");
    (document.getElementById("languageOptions") as HTMLSelectElement).value = this.languageService.getCurrentLanguage();
  }

  selectLanguage(event: Event){
    const lang = (event.target as HTMLSelectElement).value;
    this.languageService.changelanguage(lang);
    console.log("NavigationComponent.selectValue: changing selector value specifically to " + lang);
    (document.getElementById("languageOptions") as HTMLSelectElement).value = lang;

    const base = window.location.origin;
    let path = window.location.pathname;
    console.log("NavigationComponent.selectValue: Current base: " + base + ", current path: " + path + " Changing language to: " + lang);
    
    this.updateUrl(base, path, lang);
  }

  updateUrl(base: string, path: string, newLanguage: string) {
    const oldUrl = base + path;
    const defaultLanguage = this.languageService.getDefaultLanguage();
    const currentLanguage = this.languageService.getCurrentLanguageFromUrl();

    if (currentLanguage == defaultLanguage) {
      if (newLanguage == defaultLanguage) {
        console.log("already on default language (" + defaultLanguage + ") page, do nothing");
      } else {
        path = "/" + newLanguage + path;
        console.log("new language " + newLanguage + " added to the default path " + path);
      }
    } else {
      if (newLanguage == defaultLanguage) {
        path = path.substring(3);
        console.log(currentLanguage + " removed from the beginning of the path: " + path + " to display the default language page");
      } else if (newLanguage == currentLanguage) {
        console.log("already on " + currentLanguage + " page, do nothing");
      } else {
        console.log("language " + currentLanguage + " replaced by " + newLanguage + " in the path");
          path = "/" + newLanguage + path.substring(3);
      }
    } 

    const newUrl = base + path;
    console.log("old url: " + oldUrl + " new url: " + newUrl);
    
    if (oldUrl != newUrl) {
      console.log("Go to page: " + base + "" + path);
      window.location.href = base + "" + path;
    } else {
      console.log("no change in url, stay on the page");  
    }
  }

  getAllSupportedLanguageCodes(): string[] {
    return this.languageService.getAllSupportedLanguageCodes();
  }

  getAllSupportedLanguageDisplayNames(): string[] {
    return this.languageService.getAllSupportedLanguageDisplayNames();
  }

}
