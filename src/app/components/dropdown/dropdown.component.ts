import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  value: number = 10;
  dropDownValues: number[] = [10, 25, 50, 70, 100];

  @Output() dropDownEvent = new EventEmitter<number>();

  onDropDownChange(value: string) {
    this.dropDownEvent.emit(parseInt(value, 10));
  }
}
