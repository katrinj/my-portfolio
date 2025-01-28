import { Component, EventEmitter, Output, Input, OnInit, inject} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormArray, FormsModule, Validators } from '@angular/forms';
import { SubmitPollRequest } from '../submit-poll-request';
import { Veggie } from '../veggie';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  @Output() formSubmittedEvent = new EventEmitter<SubmitPollRequest>();
  @Input() veggies: Veggie[] = [];
  @Input() minPercentage: number = -1;
  @Input() maxPercentage: number = -1;

  languageService: LanguageService = inject(LanguageService);

  poll: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.poll = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required, Validators.minLength(10)]),
      percentage: new FormControl('', [Validators.required, Validators.min(this.minPercentage), Validators.max(this.maxPercentage)]),
      likedveggies: new FormArray(this.getAllVeggies()),
      dislikedveggies: new FormArray(this.getAllVeggies()),
    })
  } 

  get email() {
    return this.poll.get('email');
  }

  get percentage() {
    return this.poll.get('percentage');
  }

  getAllVeggies(): FormControl[] {
    return this.veggies.map(r => new FormControl(''));
  }

  getVeggieName(veggie: Veggie): string {
    const lang = this.languageService.getCurrentLanguage();
    if (lang == "en") {
      return veggie.name_en;
    } else {
      return veggie.name_et;
    }
  }

  submitPoll() {
    console.log("email: " + this.poll.value.email);
    console.log("percentage: " + this.poll.value.percentage);
    console.log("likedveggies checkboxes: " + this.poll.value.likedveggies);
    console.log("dislikedveggies checkboxes: " + this.poll.value.dislikedveggies);  
    
    this.formSubmittedEvent.emit(this.createSubmitPollRequest());
  }

  createSubmitPollRequest() : SubmitPollRequest {
    return {
      email: this.poll.value.email,
      likedVeggies: this.checkboxValuesToVeggieKeys(this.poll.value.likedveggies),
      dislikedVeggies: this.checkboxValuesToVeggieKeys(this.poll.value.dislikedveggies),
      percentage: this.poll.value.percentage
    } satisfies SubmitPollRequest;
  }

  checkboxValuesToVeggieKeys(theveggies : any): number[] | undefined {
    let veggieList: number[] = [];
    if (theveggies == undefined) {
      return undefined;
    }
    for (let i = 0; i < theveggies.length; i++) {    
      if (theveggies[i] == true) {
        veggieList.push(this.veggies[i].key);
      }
    }
    return veggieList;
  }

}
