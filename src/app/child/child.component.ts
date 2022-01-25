import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() getinstruction;

  @Output()

  childevent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }


  replymethod(event : any){
    this.childevent.emit(event.target.value)
  }
  
}
