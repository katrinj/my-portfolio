import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  index = signal(0);

  pics = [
    {urlbase: "./img1_", caption: "Väike viik", alt: "Pilt 1"},
    {urlbase: "./img2_", caption: "Sügis", alt: "Pilt 2"},
    {urlbase: "./img3_", caption: "Väike viik II", alt: "Pilt 3"},
    {urlbase: "./img4_", caption: "Männimetsa tekstuurid", alt: "Pilt 4"},
    {urlbase: "./img5_", caption: "Talvine laht", alt: "Pilt 5"},
    {urlbase: "./img6_", caption: "Männimetsa tekstuurid II", alt: "Pilt 6"},
    {urlbase: "./img7_", caption: "Rabaäärne mets", alt: "Pilt 7"},
    {urlbase: "./img8_", caption: "Ploomiõied", alt: "Pilt 8"},
    {urlbase: "./img9_", caption: "Pohlad", alt: "Pilt 9"},
    {urlbase: "./img10_", caption: "Krookused", alt: "Pilt 10"}
  ]

  getCurrentPicUrlBase(width: number, height: number): string {
    return this.pics[this.index()].urlbase + "" + width + "x" + height + "px.jpg";
  }

  getCurrentPicCaption(): string {
    return this.pics[this.index()].caption;
  }

  getCurrentPicAlt(): string {
    return this.pics[this.index()].alt;
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
