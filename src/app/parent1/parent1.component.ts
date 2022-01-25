import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
  replyfromchild1;


  constructor() { }

  ngOnInit(): void {
  }

  receivedata(event){
    this.replyfromchild1 = event;

  }

}
