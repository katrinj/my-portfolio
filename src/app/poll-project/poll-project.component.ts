import { Component, inject} from '@angular/core';
import { FormComponent } from "../form/form.component";
import { SubmitPollRequest } from '../submit-poll-request';
import { PollApiService } from '../poll-api.service';
import { PollResultsComponent } from "../poll-results/poll-results.component";
import { SubmitPollResponse } from '../submit-poll-response';

@Component({
  selector: 'app-poll-project',
  imports: [FormComponent, PollResultsComponent],
  templateUrl: './poll-project.component.html',
  styleUrl: './poll-project.component.css'
})
export class PollProjectComponent {
  submitted = false;
  
  pollApiService: PollApiService = inject(PollApiService);

  submitPollRequest!: SubmitPollRequest;
  submitPollResponse: SubmitPollResponse | undefined;

  handlePollSubmission($event : SubmitPollRequest) {
    this.submitPollRequest = $event;
    this.sendsubmitPollRequest(this.submitPollRequest);
    
  }

  sendsubmitPollRequest(submitPollRequest: SubmitPollRequest) {
    console.log("Request to be sent to the server: " + JSON.stringify(submitPollRequest));
    this.pollApiService.sendSubmitPollRequest(submitPollRequest).then(resp => {
        this.submitPollResponse = resp;
        console.log("Response received from the server: " + JSON.stringify(resp));
        this.submitted = true;
    });
  }

  reloadPoll() {
    window.location.reload();
  }
}
