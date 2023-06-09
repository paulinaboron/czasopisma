import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pass = ""
  accepted = "1234567890."
  @Output() passCreated = new EventEmitter<{ password: string }>();

  constructor() { }

  ngOnInit(): void {
  }

  onPassChange() {
    this.passCreated.emit({ password: this.pass });
  }

  onKeyDown(event: any){
    if(!this.accepted.includes(event.key) && event.key != "Backspace")  event.preventDefault()
    if(event.key == "." && this.pass.includes(".")) event.preventDefault()
  }

}
