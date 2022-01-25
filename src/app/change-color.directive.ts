    import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private element:ElementRef ) {
    this.element.nativeElement.style.color="red";
   }

   @HostListener('mouseenter') mouseenter(){
     this.changeColor("green");
   }

   @HostListener('mouseleave') mouseLeave(){
     this.changeColor("red")
   }
   
   changeColor(hello){
     this.element.nativeElement.style.color=hello;
   }


}
