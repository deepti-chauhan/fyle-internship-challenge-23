import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() value: number = 10;
  dropDownValues: number[] = [10, 25, 50, 70, 100];

  @Output() dropDownEvent = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value']) {
      this.dropDownValues = [
        changes['value'].currentValue,
        ...this.dropDownValues.filter(
          (v) => v !== changes['value'].currentValue
        ),
      ];
    }
  }

  onDropDownChange(value: string) {
    console.log('value:', parseInt(value, 10));
    this.value = parseInt(value, 10);
    this.dropDownEvent.emit(parseInt(value, 10));
  }
}
