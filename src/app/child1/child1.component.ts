import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Output()

  public childEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }


  replymethod1(event){
    this.childEvent.emit(event.target.value)

}
}
