import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-registration-step2',
  templateUrl: './registration-step2.component.html',
  styleUrls: ['./registration-step2.component.css']
})
export class RegistrationStep2Component implements OnInit {
  @ViewChild("input1") name21: ElementRef;
  @ViewChild("input2") name22: ElementRef;
  @ViewChild("input3") name23: ElementRef;
  @ViewChild("input4") name24: ElementRef;
  @ViewChild("input5") name25: ElementRef;
  @ViewChild("input6") name26: ElementRef;
  @ViewChild("input7") name27: ElementRef;

  array1i: any[] = []
  array2i: any[] = []
  array3i: any[] = []
  array4i: any[] = []
  array5i: any[] = []
  array6i: any[] = []
  array7i: any[] = []

  constructor() { }

  @Input() regForm: FormGroup;
  @Input() stepper: MatStepper;

  ngOnInit() {
    this.name21.nativeElement.focus();

  }

  input1fup(event) {
    this.array1i = []
  }
  input2fup(event) {
    this.array2i = []
  }
  input3fup(event) {
    this.array3i = []
  }
  input4fup(event) {
    this.array4i = []
  }
  input5fup(event) {
    this.array5i = []
  }
  input6fup(event) {
    this.array6i = []
  }
  input7fup(event) {
    this.array7i = []
  }

  input1f(event) {
    const index: number = this.array1i.indexOf(event.key);
    if (index == -1) {
      this.array1i.push(event.key)
    }
    const key1: number = this.array1i.indexOf("Meta");
    const key2: number = this.array1i.indexOf("c");

    if (key1 != -1) {
      if (key2 != -1) {
        this.name21.nativeElement.value = "OK"
        this.name22.nativeElement.focus();
      }
    }
  }
  input2f(event) {
    const index: number = this.array2i.indexOf(event.key);
    if (index == -1) {
      this.array2i.push(event.key)
    }
    const key1: number = this.array2i.indexOf("Meta");
    const key2: number = this.array2i.indexOf("b");

    if (key1 != -1) {
      if (key2 != -1) {
        this.name22.nativeElement.value = "OK"
        this.name23.nativeElement.focus();
      }
    }
  }
  input3f(event) {
    const index: number = this.array3i.indexOf(event.key);
    if (index == -1) {
      this.array3i.push(event.key)
    }
    const key1: number = this.array3i.indexOf("Meta");
    const key2: number = this.array3i.indexOf("Shift");
    const key3: number = this.array3i.indexOf("l");

    if (key1 != -1) {
      if (key2 != -1) {
        if (key3 != -1) {
          this.name23.nativeElement.value = "OK"
          this.name24.nativeElement.focus();
        }
      }
    }
  }

  input4f(event) {
       const index: number = this.array4i.indexOf(event.key);
    if (index == -1) {
      this.array4i.push(event.key)
    }
    const key1: number = this.array4i.indexOf("Meta");
    const key2: number = this.array4i.indexOf("Alt");
    const key3: number = this.array4i.indexOf("ø");

    if (key1 != -1) {
      if (key2 != -1) {
        if (key3 != -1) {
          this.name24.nativeElement.value = "OK"
          this.name25.nativeElement.focus();
        }
      }
    }
  }
  input5f(event) {
    const index: number = this.array5i.indexOf(event.key);
    if (index == -1) {
      this.array5i.push(event.key)
    }
    console.log(event.key)
    const key1: number = this.array5i.indexOf("Meta");
    const key2: number = this.array5i.indexOf("Alt");
    const key3: number = this.array5i.indexOf("Backspace");

    if (key1 != -1) {
      if (key2 != -1) {
        if (key3 != -1) {
          this.name25.nativeElement.value = "OK"
        }
      }
    }
  }
  input6f(event) {
    const index: number = this.array6i.indexOf(event.key);
    if (index == -1) {
      this.array6i.push(event.key)
    }
    const key1: number = this.array6i.indexOf("Meta");
    const key2: number = this.array6i.indexOf("i");

    if (key1 != -1) {
      if (key2 != -1) {
        this.name26.nativeElement.value = "OK"
        this.name27.nativeElement.focus();
      }
    }
  }
  input7f(event) {
    const index: number = this.array7i.indexOf(event.key);
    if (index == -1) {
      this.array7i.push(event.key)
    }
    const key1: number = this.array7i.indexOf("Shift");
    const key2: number = this.array7i.indexOf("E");
console.log(this.array7i)
    if (key1 != -1) {
      if (key2 != -1) {
        this.name27.nativeElement.value = "OK"
        this.stepper.next()
      }
    }
  }

  step2Submitted() {
    this.regForm.get('contactDetails1').get('f1').markAsTouched();
    this.regForm.get('contactDetails1').get('f1').updateValueAndValidity();
    this.regForm.get('contactDetails1').get('f2').markAsTouched();
    this.regForm.get('contactDetails1').get('f2').updateValueAndValidity();
    this.regForm.get('contactDetails1').get('f3').markAsTouched();
    this.regForm.get('contactDetails1').get('f3').updateValueAndValidity();
    this.regForm.get('contactDetails1').get('f4').markAsTouched();
    this.regForm.get('contactDetails1').get('f4').updateValueAndValidity();
    this.regForm.get('contactDetails1').get('f5').markAsTouched();
    this.regForm.get('contactDetails1').get('f5').updateValueAndValidity();
    this.regForm.get('contactDetails1').get('f6').markAsTouched();
    this.regForm.get('contactDetails1').get('f6').updateValueAndValidity();
    this.regForm.get('contactDetails1').get('f7').markAsTouched();
    this.regForm.get('contactDetails1').get('f7').updateValueAndValidity();
  }



}
