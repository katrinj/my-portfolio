import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { CvDataService } from '../cv-data.service';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-cv',
  imports: [],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent implements AfterViewInit {

  cvDataService: CvDataService = inject(CvDataService);
  languageService: LanguageService = inject(LanguageService);

  @ViewChild('canvas', {static: true}) myCanvas!: ElementRef;
  ngAfterViewInit(): void {
    const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');

    let timeLineItems = document.querySelector(".timeLineItems") as HTMLDivElement;
    let timeLineData = timeLineItems.getBoundingClientRect();
    let timeLineHeight = timeLineData.height;
    console.log("offset: " + timeLineItems.offsetHeight + " height: " + timeLineData.height);
    
    const extra = 80;    
    canvas.height = timeLineHeight + extra;
    canvas.width = 20;

    if (context) {
      this.drawTimeLine(context, 10, 10, timeLineHeight! + (extra - 10));
    }
  }

  drawTimeLine(context : CanvasRenderingContext2D, x: number, y: number, h: number) {
    context.strokeStyle = 'white';
    context.fillStyle = 'white';
    context.lineWidth = 6;

    // timeline
    this.drawTimeline(context, x, y, h);

    // circles at both ends of the timeline
    this.drawCirleAt(context, x, y, 10);
    this.drawCirleAt(context, x, h, 10);
  }

  drawTimeline(context : CanvasRenderingContext2D, x: number, y: number, h: number) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x, h);
    context.stroke();
  }

  drawCirleAt(context : CanvasRenderingContext2D, x: number, y: number, radius: number) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fill();
  }

  isWorkItem(type: string): boolean {
    return type == "work";
  }

  getTimeLineItemTypeClass(type: string) {
    if (this.isWorkItem(type)) {
      return "timeLineItem timeLineItemWork"
    } else {
      return "timeLineItem timeLineItemSchool"
    }
  }

  getTimeLineItems() {
    const lang = this.languageService.getCurrentLanguage();
    return this.cvDataService.getTimeLineItems(lang);
  }

  getProgrammingLanguages(): string[] {
    return this.cvDataService.getProgrammingLanguages();
  }

  getHelperSoftware(): string[] {
    return this.cvDataService.getHelperSoftware();
  }

  getArtSoftware(): string[] {
    return this.cvDataService.getArtSoftware();
  }

  getLanguageItems() {
    const lang = this.languageService.getCurrentLanguage();
    return this.cvDataService.getLanguageItems(lang);
  }

  getTechCertificates() {
    return this.cvDataService.getTechCertificates();
  }

  getLanguageCertificates() {
    return this.cvDataService.getLanguageCertificates();
  }

}
