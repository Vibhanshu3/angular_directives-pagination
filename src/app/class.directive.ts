import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  //Attribute directive
  
  // @Input() bgColor: String | undefined;

  //as soon as appClass directive is identified in html class
  //this class directive will be initialised and constructor will be called
  //and then apply the color property
  constructor(private element: ElementRef) {
    // html element on which this directive is applied to
    // setTimeout(() =>{
    //   this.element.nativeElement.style.backgroundColor = this.bgColor;
    // },50)
  }

   @Input("appClass") set classNames(classObj: any) {
    // this.element.nativeElement.style.backgroundColor = color;
    for(let key in classObj) {
      if(classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
   }
}
