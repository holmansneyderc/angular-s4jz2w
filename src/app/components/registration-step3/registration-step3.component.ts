import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-registration-step3',
  templateUrl: './registration-step3.component.html',
  styleUrls: ['./registration-step3.component.css']
})
export class RegistrationStep3Component implements OnInit {
  @Input() id = []
  @Input() stepper: MatStepper;

  constructor() { }
  public count = 0
  public select = 0
  ngOnInit() {
    this.select = this.id[this.count]
  }

  clickBox(idclick){
    if(idclick == this.id[this.count]){
      this.select = this.id[this.count+1]
      this.count =this.count+1
    }
    if(this.id[this.count] == undefined){
      this.stepper.next()

    }
  }

}
