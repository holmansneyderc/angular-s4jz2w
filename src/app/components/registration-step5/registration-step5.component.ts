import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-step5',
  templateUrl: './registration-step5.component.html',
  styleUrls: ['./registration-step5.component.css']
})
export class RegistrationStep5Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
}
