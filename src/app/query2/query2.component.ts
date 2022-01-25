import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-query2',
  templateUrl: './query2.component.html',
  styleUrls: ['./query2.component.css']
})
export class Query2Component implements OnInit,AfterViewInit,AfterContentInit {
  @ViewChild ('example') heading:ElementRef
  @ViewChildren('example') headings:QueryList<any>
  @ContentChild ('test') test:ElementRef
  @ContentChildren ('tests') tests : QueryList<any>

  constructor() { }

  ngOnInit(): void {
    console.log(this.heading);
    console.log(this.tests);
    
    
  }

  ngAfterViewInit(): void {
      console.log(this.headings);
      this.headings.forEach((element) =>{
        console.log(element.nativeElement.innerText);
         })


      
  }
    ngAfterContentInit(): void {
        // console.log(this.test.nativeElement.innerText);
        console.log(this.tests);
        
        this.tests.forEach((element) =>{
          console.log
          (element.nativeElement.innerText);
          
        } )
        
    }
  
}
