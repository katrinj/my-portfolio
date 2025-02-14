import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [HeaderComponent, RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  pollDetailsHidden = true;

  togglePollDetails() {
    this.pollDetailsHidden = !this.pollDetailsHidden;
    let stateButton = document.getElementById("detailsStateButton") as HTMLButtonElement;
    if (this.pollDetailsHidden) {
      stateButton.innerHTML = "+"; // indicates it can be expanded
    } else {
      stateButton.innerHTML = "-"; // indicates it can be hidden
    }
  }

  getPollDetailsClass(): string {
    if (this.pollDetailsHidden) {
      return "detailsHidden";
    } else {
      return "detailsVisible"
    }
  }
}
