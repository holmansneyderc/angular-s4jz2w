import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  registrationForm: FormGroup;
  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      'personalDetails1': new FormGroup({
        'f1': new FormControl('', Validators.required),
        'f2': new FormControl('', Validators.required),
        'f3': new FormControl('', Validators.required),
        'f4': new FormControl('', Validators.required),
      }),
      'contactDetails1': new FormGroup({
        'f1': new FormControl(''),
        'f2': new FormControl(''),
        'f3': new FormControl(''),
        'f4': new FormControl(''),
        'f5': new FormControl(''),
        'f6': new FormControl(''),
        'f7': new FormControl('')
      }),
      'personalDetails2': new FormGroup({
        'f1': new FormControl('', Validators.required),
        'f2': new FormControl('', Validators.required),
        'f3': new FormControl('', Validators.required),
        'f4': new FormControl('', Validators.required),
      }),
      'contactDetails2': new FormGroup({
        'f1': new FormControl(''),
        'f2': new FormControl(''),
        'f3': new FormControl(''),
        'f4': new FormControl(''),
        'f5': new FormControl(''),
        'f6': new FormControl(''),
        'f7': new FormControl('')
      }),
      'personalDetails3': new FormGroup({
        'f1': new FormControl('', Validators.required),
        'f2': new FormControl('', Validators.required),
        'f3': new FormControl('', Validators.required),
        'f4': new FormControl('', Validators.required),
      }),
      'contactDetails3': new FormGroup({
        'f1': new FormControl(''),
        'f2': new FormControl(''),
        'f3': new FormControl(''),
        'f4': new FormControl(''),
        'f5': new FormControl(''),
        'f6': new FormControl(''),
        'f7': new FormControl('')
      }),
    });

  }

}
