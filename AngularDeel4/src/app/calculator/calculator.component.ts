import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  counter:number;
  button:string = "button";


  constructor() { }

  ngOnInit() {
  }

 
  public increment(value:number) {
   this.counter++
    
  }

  /**
   * SetCounter
value:number   */
  public SetCounter(value:number) {
    this.counter = value;
    
  }

}
