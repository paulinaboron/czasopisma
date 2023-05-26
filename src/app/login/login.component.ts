import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pass = ""
  @Output() passCreated = new EventEmitter<{ password: string }>();

  constructor() { }

  ngOnInit(): void {
  }

  onPassChange() {
    this.passCreated.emit({ password: this.pass });
  }

}
