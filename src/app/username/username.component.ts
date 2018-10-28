import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  username: string = '';
  showButton: boolean = false;

  constructor() {

  }

  ngOnInit() {
  }

  oncreateUsername(event: any) {
    if ((<HTMLInputElement>event.target).value.length > 0) {
      this.showButton = true;
    } else {
      this.showButton = false
    }
  }
  onButtonClick() {
    this.username = '';
  }

}
