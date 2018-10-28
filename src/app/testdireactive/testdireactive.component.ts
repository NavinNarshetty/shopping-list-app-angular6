import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testdireactive',
  templateUrl: './testdireactive.component.html',
  styleUrls: ['./testdireactive.component.css']
})
export class TestdireactiveComponent implements OnInit {

  toggleValue: boolean = false;
  count: number = 0;
  countArray = [];
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.count++
    this.countArray.push(this.count)
    this.toggleValue = !this.toggleValue;
  }

}
