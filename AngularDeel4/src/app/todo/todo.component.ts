import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})


export class TodoComponent implements OnInit {

  contentButton:string ="Voeg Toe";

  ListItems:string[] =[];
  item: string = "";


  constructor() {
    
   }

  ngOnInit() {
  }

  get items()
  {
    return this.ListItems;
  }

  public AddItem() {
    
     this.ListItems.push(this.item)
     this.item ="";

  }

}
