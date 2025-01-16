import { Component, inject} from '@angular/core';
import { FormComponent } from "../form/form.component";
import { SubmitPollRequest } from '../submit-poll-request';
import { PollApiService } from '../poll-api.service';
import { SubmitPollResponse } from '../submit-poll-response';
import { Veggie } from '../veggie';

@Component({
  selector: 'app-poll-project',
  imports: [FormComponent],
  templateUrl: './poll-project.component.html',
  styleUrl: './poll-project.component.css'
})
export class PollProjectComponent {
  veg = [
    {key: 1, name_et: 'Tomat', name_en: 'Tomato'},
    {key: 2, name_et: 'Redis', name_en: 'Radish'},
    {key: 3, name_et: 'Suvikõrvits', name_en: 'Zuccini'},
    {key: 4, name_et: 'Kurk', name_en: 'Cucumber'},
    {key: 5, name_et: 'Kõrvits', name_en: 'Pumpkin'},
    {key: 6, name_et: 'Kaalikas', name_en: 'Rutabaga'},
    {key: 7, name_et: 'Peakapsas', name_en: 'Cabbage'},
    {key: 8, name_et: 'Brokoli', name_en: 'Broccoli'},
    {key: 9, name_et: 'Lillkapsas', name_en: 'Cauliflower'},
    {key: 10, name_et: 'Jääsalat', name_en: 'Iceberg lettuce'},

    {key: 11, name_et: 'Mugulsibul', name_en: 'Onion'},
    {key: 12, name_et: 'Küüslauk', name_en: 'Garlic'},
    {key: 13, name_et: 'Porrulauk', name_en: 'Leek'},
    {key: 14, name_et: 'Karulauk', name_en: 'Wild garlic'},
    {key: 15, name_et: 'Kartul', name_en: 'Potato'},
    {key: 16, name_et: 'Baklažaan', name_en: 'Eggplant'},
    {key: 17, name_et: 'Cayenne', name_en: 'Cayenne'},
    {key: 18, name_et: 'Jalapeno', name_en: 'Jalapeno'},
    {key: 19, name_et: 'Peet', name_en: 'Beetroot'},
    {key: 20, name_et: 'Porgand', name_en: 'Carrot'},

    {key: 21, name_et: 'Pastinaak', name_en: 'Parsnip'},
    {key: 22, name_et: 'Aeduba', name_en: 'Green bean'},
    {key: 23, name_et: 'Põlduba', name_en: 'Broad bean'},
    {key: 24, name_et: 'Hernes', name_en: 'Pea'},
    {key: 25, name_et: 'Lääts', name_en: 'Lentil'},
    {key: 26, name_et: 'Mustrõigas', name_en: 'Black radish'},
    {key: 27, name_et: 'Varsseller', name_en: 'Celery'},
    {key: 28, name_et: 'Juurseller', name_en: 'Celeriac'},
    {key: 29, name_et: 'Fenkol', name_en: 'Fennel'},
    {key: 30, name_et: 'Rooskapsas', name_en: 'Brussels sprout'},

    {key: 31, name_et: 'Paprika', name_en: 'Paprika'},
    {key: 32, name_et: 'Roheline sibul', name_en: 'Spring onion'},
    {key: 33, name_et: 'Murulauk', name_en: 'Chive'},
    {key: 34, name_et: 'Spinat', name_en: 'Spinach'},
    {key: 35, name_et: 'Rukola', name_en: 'Rocket'},
    {key: 36, name_et: 'Lehtsalat', name_en: 'Lettuce'},
    {key: 37, name_et: 'Koriander', name_en: 'Coriander'},
    {key: 38, name_et: 'Bataat', name_en: 'Sweet potato'}
  ] satisfies Veggie[];

  message = "";
  resultsReady = false;
  results = [""];
  displayForm = true;
  pollApiService: PollApiService = inject(PollApiService);

  submitPollRequest!: SubmitPollRequest;
  submitPollResponse: SubmitPollResponse | undefined;

  handlePollSubmission($event : SubmitPollRequest) {
    this.submitPollRequest = $event;
    this.displayForm = false;
    this.message = "Please wait. Processing the answers and querying stats.";
    this.sendsubmitPollRequest(this.submitPollRequest);
  }

  sendsubmitPollRequest(submitPollRequest: SubmitPollRequest) {
    console.log("Request to be sent to the server: " + JSON.stringify(submitPollRequest));
    this.pollApiService.sendSubmitPollRequest(submitPollRequest).then(resp => {
        this.submitPollResponse = resp;
        console.log("Response received from the server: " + JSON.stringify(resp));
        this.message = "";
        this.displayResults(resp);
    }).catch(error => {
      this.message = "Error received from the server: " + error.message;
    });
    this.resultsReady = true;
  }

  displayResults(submitPollResponse : SubmitPollResponse | undefined) {
    if (submitPollResponse == undefined) {
      this.message = "Could not connect to the server."
    } else {
      this.results.push("Most popular veggie: " + this.veggieKeysToNames(submitPollResponse.mostPopularVeggies, true));
      this.results.push("Least popular veggie: " + this.veggieKeysToNames(submitPollResponse.leastPopularVeggies, true));
      this.results.push("Average percentage " + submitPollResponse.averagePercentage);
    }
  }

  veggieKeysToNames(keyList : number[], language_et : boolean): string[] {
    let veggieNames: string[] = [];
    this.veg.forEach(v => {
      for (let i = 0; i < keyList.length; i++) {
        if (keyList[i] == v.key) {
            if (language_et) {
              veggieNames.push(v.name_et);
            } else {
              veggieNames.push(v.name_en);
            }
        }
      }
    });
    return veggieNames;
  }

  reloadPoll() {
    window.location.reload();
  }

}
