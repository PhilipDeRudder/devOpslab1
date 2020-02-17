import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-positie',
  templateUrl: './positie.component.html',
  styleUrls: ['./positie.component.css']
})
export class PositieComponent implements OnInit {



  xPos:number;
  yPos:number;
  constructor() { }

  ngOnInit() {
  }



  /**
   * getCoordinaten
   */
  public getCoordinaten(event:MouseEvent) {
     this.xPos = event.clientX
     this.yPos = event.clientY;
    
  }

}
