import { Component, OnInit } from '@angular/core';
import * as Math from 'mathjs';


import { UrlTree } from '@angular/router';
import { Url } from 'url';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  getal:number; 

  constructor() { 

    this.getal = Math.random(0,12);
  }

  ngOnInit() {
  }

}
