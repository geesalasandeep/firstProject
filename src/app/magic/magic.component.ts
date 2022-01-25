import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magic',
  templateUrl: './magic.component.html',
  styleUrls: ['./magic.component.css']
})
export class MagicComponent implements OnInit {
customerName;
emp;

  customerage=30;
  // notAvailable = false
  details = false
    // details : boolean

  constructor() { }

  ngOnInit(): void {

    
  }



  swimmingpass(){
    if(this.customerage >= 10){
      return "success"
    }else{
      return "failure"
    }
  }

    pubpass(){
      if(this.customerage >= 21){
        return "success";
      }else{
        return "failure";
    }
    }
    submit(){
      this.details = true;
    }
  



    empDetails = [
      {
        empName : 'sandeep',
        empid : 123,
        designation : 'ceo'
      },
      {
        empName : 'ashwini',
        empid : 1234,
        designation : 'director'
      },
      {
        empName : 'sravan',
        empid : 1235,
        designation : 'manager'

      }]

  }



  
  

