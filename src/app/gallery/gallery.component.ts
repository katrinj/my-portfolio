import { Component, inject, signal } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  languageService: LanguageService = inject(LanguageService);
  index = signal(0);

  pics = [
    {urlbase: "./img1_", caption_et: "Väike viik", caption_en: "Lake Väike viik"},
    {urlbase: "./img2_", caption_et: "Sügis", caption_en: "Autumn"},
    {urlbase: "./img3_", caption_et: "Kontrastsem väike viik", caption_en: "Lake Väike viik with more contrast"},
    {urlbase: "./img4_", caption_et: "Männimetsa tekstuurid lähemalt", caption_en: "Pineforest textures up close"},
    {urlbase: "./img5_", caption_et: "Talvine laht", caption_en: "Winter bay"},
    {urlbase: "./img6_", caption_et: "Männimetsa tekstuurid kaugemalt", caption_en: "Pineforest textures from farther away"},
    {urlbase: "./img7_", caption_et: "Rabaäärne mets", caption_en: "Forest near a bog trail"},
    {urlbase: "./img8_", caption_et: "Ploomiõied", caption_en: "Plum blossoms"},
    {urlbase: "./img9_", caption_et: "Pohlad", caption_en: "Lingonberries"},
    {urlbase: "./img10_", caption_et: "Krookused", caption_en: "Crocus flowers"}
  ]

  getCurrentPicUrlBase(width: number, height: number): string {
    return this.pics[this.index()].urlbase + "" + width + "x" + height + "px.jpg";
  }

  getCurrentPicCaption(): string {
    const lang = this.languageService.getCurrentLanguage();
    if (lang == "en") {
      return this.pics[this.index()].caption_en;  
    } else {
      return this.pics[this.index()].caption_et;
    }
  }

  getCurrentPicAlt(): string {
    const lang = this.languageService.getCurrentLanguage();
    if (lang == "en") {
      return "Image of " + this.pics[this.index()].caption_en;
    } else {
      return "Image of " + this.pics[this.index()].caption_et;
    }
  }

  isLastItemReached(): boolean {
    return this.index() == this.pics.length - 1;
  }

  isFirstItemReached(): boolean {
    return this.index() == 0;
  }

  nextPic(): void {
    this.index.update(a => a + 1);
  }

  previousPic(): void {
    this.index.update(a => a - 1);
  }

  activatePic(id : number): void {
    this.index.set(id);
  }
}
