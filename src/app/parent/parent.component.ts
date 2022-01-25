import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  replyfromchild;

  instruction:string;

  constructor() { }
  ngOnInit(): void {
  }

  receivedata(event){
    this.replyfromchild = event;
  }


}
