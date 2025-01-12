import { Component, EventEmitter, Output} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormArray, FormsModule, Validators } from '@angular/forms';
import { SubmitPollRequest } from '../submit-poll-request';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() formSubmittedEvent = new EventEmitter<SubmitPollRequest>();

  veggies = [
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
  ];

  poll = new FormGroup({
    email: new FormControl('smth1@smth.ee', [Validators.email, Validators.required]),
    percentage: new FormControl(23, [Validators.required, Validators.min(0)]),
    likedveggies: new FormArray(this.getAllVeggies()),
    dislikedveggies: new FormArray(this.getAllVeggies()),
  })
 
  getAllVeggies(): FormControl[] {
    return this.veggies.map(r => new FormControl(''));
  }

  submitPoll() {
    console.log("email: " + this.poll.value.email);
    console.log("percentage: " + this.poll.value.percentage);
    console.log("likedveggies: " + this.poll.value.likedveggies);
    console.log("dislikedveggies: " + this.poll.value.dislikedveggies);  
    
    this.formSubmittedEvent.emit(this.createSubmitPollRequest());
  }

  arrangeVeggieValues(theveggies : any): string[] | undefined {
    let veggieList: string[] = [];
    if (theveggies == undefined) {
      return undefined;
    }
    for (let i = 0; i < theveggies.length; i++) {    
      if (/*theveggies[i] != undefined && */theveggies[i] == true) {
        veggieList.push(this.findVeggieAt(i + 1))
      }
    }
    return veggieList;
  }

  createSubmitPollRequest() : SubmitPollRequest {
    return {
      email: this.poll.value.email,
      likedVeggies: this.arrangeVeggieValues(this.poll.value.likedveggies),
      dislikedVeggies: this.arrangeVeggieValues(this.poll.value.dislikedveggies),
      percentage: this.poll.value.percentage
    } satisfies SubmitPollRequest;
  }

  findVeggieAt(key: number): string {
    for (let i = 0; i < this.veggies.length; i++) {
      if (this.veggies[i].key == key) {
        return this.veggies[i].name_et;
      }
    }
    return "not found";
  }

}
