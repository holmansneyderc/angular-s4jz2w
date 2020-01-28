import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-registration-step1',
  templateUrl: './registration-step1.component.html',
  styleUrls: ['./registration-step1.component.css']
})
export class RegistrationStep1Component implements OnInit {
  @ViewChild("input1") name1: ElementRef;
  @ViewChild("input2") name2: ElementRef;
  @ViewChild("input3") name3: ElementRef;
  @ViewChild("input4") name4: ElementRef;

  constructor() { }

  @Input() regForm: FormGroup;
  @Input() stepper: MatStepper;

  ngOnInit() {
  }
  ngAfterViewInit(){

  }
  input1f(event) {
    if (event.target.value == 'el sapo de mi casa come queso, zapallo y xoubas') {
      this.name2.nativeElement.focus();
    }
  }
  input2f(event) {
    if (event.target.value == 'en un pueblo un niño juega afuera y tu vejez es notable') {
      this.name3.nativeElement.focus();
    }
  }
  input3f(event) {
    if (event.target.value == 'la leña esta partida, la tijera se ha roto, yo quiero jugar y reír, dale a la gata sus gatitos y las fresas y las patatas del huerto') {
      this.name4.nativeElement.focus();
    }
  }
  input4f(event) {
    if (event.target.value == 'la vaca flaca, las lañas malvas, las jacas blancas, a la sal acabas la salsa, zancada flaca') {
      this.stepper.next()
    }
  }

  step1Submitted() {
    this.regForm.get('personalDetails1').get('f1').markAsTouched();
    this.regForm.get('personalDetails1').get('f1').updateValueAndValidity();
    this.regForm.get('personalDetails1').get('f2').markAsTouched();
    this.regForm.get('personalDetails1').get('f2').updateValueAndValidity();
    this.regForm.get('personalDetails1').get('f3').markAsTouched();
    this.regForm.get('personalDetails1').get('f3').updateValueAndValidity();
    this.regForm.get('personalDetails1').get('f4').markAsTouched();
    this.regForm.get('personalDetails1').get('f4').updateValueAndValidity();
  }

}
