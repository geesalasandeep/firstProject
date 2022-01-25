import { AfterContentChecked, AfterContentInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit,
AfterContentChecked,
AfterContentInit,
DoCheck
{

  empName;
  isChild = false;
  
  toggleChild(){
    this.isChild = !this.isChild
  }

  constructor() { 
    console.log('parent constructor called');
    
  }

  ngOnInit(): void {
    console.log('parent ngoninit is called');
    
  }
  ngOnChanges(){
    console.log('child onchange is called');
    

  }

  ngDoCheck(){
    console.log('child do check is called');

  }

  ngAfterContentChecked(): void {
    console.log('child AfterContentchecked is called');
      
  }

  ngAfterContentInit(): void {
    console.log('child ngAfterContentInit is called');
      
  }

}
