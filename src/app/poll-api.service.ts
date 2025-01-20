import { Injectable } from '@angular/core';
import { SubmitPollResponse } from './submit-poll-response';
import { SubmitPollRequest } from './submit-poll-request';

@Injectable({
  providedIn: 'root'
})
export class PollApiService {

  constructor() { }

  async sendSubmitPollRequest(request : SubmitPollRequest) : Promise<SubmitPollResponse | undefined> {
     //let url = "http://localhost:8080/poll/submit"
    let url = "https://poll-app-758004356761.europe-north1.run.app/poll/submit";
    
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request)
      });
      if (response.status == 400) {
        throw new Error($localize`:@@invalidSubmissionError:Probleem sisestatud andmetega`);
      } else if (response.status == 500) {
        throw new Error($localize`:@@internalServerError:Tekkis serveripoolne viga`);
      }    
      return response.json();
   } catch (error : any) {
      console.log("error occurred: " + error.message);
      throw new Error(error.message);
    }
  }
}
