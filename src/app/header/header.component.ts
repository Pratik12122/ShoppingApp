import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() activeLinkEvent = new EventEmitter<string>();

  onSelect(activeLink: string) {
    this.activeLinkEvent.emit(activeLink);
  }
}
