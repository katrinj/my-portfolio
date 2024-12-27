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
    {url: "./img1_1920x1080px.jpg", caption: "Väike viik", alt: "Pic 1"},
    {url: "./img2_1920x1080px.jpg", caption: "Sügisene kartulipõld", alt: "Pic 2"},
    {url: "./img3_1920x1080px.jpg", caption: "Sinisem väike viik", alt: "Pic 3"},
    {url: "./img4_1920x1080px.jpg", caption: "Männimetsa samblavaip", alt: "Pic 4"},
    {url: "./img5_1920x1080px.jpg", caption: "Talvine laht", alt: "Pic 5"},
    {url: "./img6_1920x1080px.jpg", caption: "Männimetsa taimestik", alt: "Pic 6"},
    {url: "./img7_1920x1080px.jpg", caption: "Rabaäärne mets", alt: "Pic 7"},
    {url: "./img8_1920x1080px.jpg", caption: "Ploomiõied", alt: "Pic 8"},
    {url: "./img9_1920x1080px.jpg", caption: "Pohlad", alt: "Pic 9"},
    {url: "./img10_1920x1080px.jpg", caption: "Kevadised krookused", alt: "Pic 10"}
  ]

  getCurrentPicUrl() {
    return this.pics[this.index()].url;
  }

  getCurrentPicCaption() {
    return this.pics[this.index()].caption;
  }

  getCurrentPicAlt() {
    return this.pics[this.index()].alt;
  }

  isLastItemReached() {
    return this.index() == this.pics.length - 1;
  }

  isFirstItemReached() {
    return this.index() == 0;
  }

  nextPic() {
    this.index.update(a => a + 1);
  }

  previousPic() {
    this.index.update(a => a - 1);
  }

  activatePic(id : number) {
    this.index.set(id);
  }
}
