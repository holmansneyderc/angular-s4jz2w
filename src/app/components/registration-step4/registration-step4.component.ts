import { Component, OnInit, Input } from '@angular/core';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-registration-step4',
  templateUrl: './registration-step4.component.html',
  styleUrls: ['./registration-step4.component.css']
})
export class RegistrationStep4Component implements OnInit {
  @Input() id = []
  @Input() little: number
  @Input() stepper: MatStepper;
  constructor() { }
  public count = 0
  public select = 0
  public dim = 300
  ngOnInit() {
    this.select = this.id[this.count]
  }

  clickBox(idclick){
    if(idclick == this.id[this.count]){
      this.select = this.id[this.count+1]
      this.count =this.count+1
      if(idclick == 5){
        let scale = (this.dim/this.little) 
        this.dim = this.dim-scale
      }
    }
    if(this.id[this.count] == undefined){
      this.stepper.next()

    }
  }
}