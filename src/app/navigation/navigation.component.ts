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
    console.log("NavigationComponent: afterviewinit: loading language selector value from language service: " + this.languageService.getCurrentLanguage());
    (document.getElementById("languageOptions") as HTMLSelectElement).value = this.languageService.getCurrentLanguage();
  }

  selectLanguage(event: Event) {
    const pickedLanguage = (event.target as HTMLSelectElement).value;
    this.languageService.changelanguage(pickedLanguage);
    console.log("NavigationComponent.selectValue: changing selector value specifically to " + pickedLanguage);
    (document.getElementById("languageOptions") as HTMLSelectElement).value = pickedLanguage;
    
    this.updateUrl(pickedLanguage);
  }

  updateUrl(newLanguage: string) {    
    const baseURI = document.baseURI;
    let path = window.location.pathname;
    console.log("NavigationComponent.updateUrl: Current baseUri: " + baseURI + ", current path: " + path + " Changing language to: " + newLanguage);
    const currentLanguage = this.languageService.getCurrentLanguageFromUrl();
    
    let route = path;
    if (route.includes("/" + currentLanguage + "/")) { // if path has language code in it, remove it, since it's also present in baseURI
      route = route.substring(3); // leave the slash in the beginning
    }
    
   if (newLanguage == currentLanguage) {
     const currentUrl = baseURI.substring(0, baseURI.length - 1) + route;
     console.log("no change in url " + currentUrl + " stay on the page");  
   } else {
     console.log("language " + currentLanguage + " replaced by " + newLanguage + " in the path");
     const newUrl = baseURI.substring(0, baseURI.length - 3) + newLanguage + route; // replace current languageCode/ with the new languageCode, and add the route
     console.log("Go to page: " + newUrl);
     window.location.href = newUrl;
   }
  }

  getAllSupportedLanguageCodes(): string[] {
    return this.languageService.getAllSupportedLanguageCodes();
  }

  getAllSupportedLanguageDisplayNames(): string[] {
    return this.languageService.getAllSupportedLanguageDisplayNames();
  }

}
