import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  searchInput: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  constructor() {}

  onSubmit() {
    this.searchEvent.emit(this.searchInput);
    this.searchInput = ''
  }
}
