import { Component, Input, OnInit } from '@angular/core';
import { SubmitPollResponse } from '../submit-poll-response';

@Component({
  selector: 'app-poll-results',
  imports: [],
  templateUrl: './poll-results.component.html',
  styleUrl: './poll-results.component.css'
})
export class PollResultsComponent implements OnInit {
  @Input() submitPollResp: SubmitPollResponse | undefined;

  ngOnInit(): void {
    this.displayResults(this.submitPollResp);
  }

  displayNoResultsMessage() {
    let resp = document.querySelector("#response");
    const responsediv = document.createElement("div")
    const errorMessage= document.createTextNode("Something went wrong, poll was not submitted. Thank you anyway!");
    responsediv.appendChild(errorMessage);
    resp?.appendChild(responsediv);  
  }

  displayResults(submitPollResponse : SubmitPollResponse | undefined) {
    if(submitPollResponse == undefined) {
      this.displayNoResultsMessage;
    } else {
      let resp = document.querySelector("#response");
      const responsediv = document.createElement("div")
      const br1 = document.createElement("br")
      const br2 = document.createElement("br")
      const most = document.createTextNode("Most popular veggie: " + submitPollResponse.mostPopularVeggie);
      const least = document.createTextNode("Least popular veggie: " + submitPollResponse.leastPopularVeggie);
      const avg = document.createTextNode("Average percentage " + submitPollResponse.averageFrequency);
      responsediv.appendChild(most);
      responsediv.appendChild(br1);
      responsediv.appendChild(least);
      responsediv.appendChild(br2);
      responsediv.appendChild(avg);
      resp?.appendChild(responsediv);
    }
  }
  
}
