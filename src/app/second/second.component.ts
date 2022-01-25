import { AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit,
AfterContentChecked,
AfterContentInit,
DoCheck
{
  @Input() empName;
  

  constructor() { 
    console.log('child constructor is called');
    
   }

  ngOnInit(): void {
    console.log('child ngonit is called');
    
  }

  // ngOnChanges(){
  //   console.log('child onchaNGE is called');
    

  // }

  ngDoCheck(){
    console.log('child do check is called');

  }


  // ngOnInit(): void {
  //   console.log('parent ngoninit is called');
    
  // }
  // ngOnChanges(){
  //   console.log('child onchaNGE is called');
    

  // }

  // ngDoCheck(){
  //   console.log('child do check is called');

  // }

  ngAfterContentChecked(): void {
    console.log('child AfterContentchecked is called');
      
  }

  ngAfterContentInit(): void {
    console.log('child ngAfterContentInit is called');
      
  }

}
