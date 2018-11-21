import { Directive, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirective {

 @HostBinding('class.open') isOpen = false;

 constructor() { }

 @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
 }

}
