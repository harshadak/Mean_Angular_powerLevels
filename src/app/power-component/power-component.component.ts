import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power-component',
  templateUrl: './power-component.component.html',
  styleUrls: ['./power-component.component.css']
})
export class PowerComponentComponent implements OnInit {
  power: number;
  power2: number;
  constructor() { }
  
  adjustPower() {
    this.power2 = this.power;
    console.log(this.power);
  }

  ngOnInit() {
    this.power = 10;
    this.power2 = this.power;
  }

}
