import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() page: number = 1;
  @Input() totalPages: number = 0;
  @Output() nextPage = new EventEmitter<number>();
  @Output() prevPage = new EventEmitter<number>();

  constructor() {}

  onNextPage() {
    console.log('next page loading...');

    this.nextPage.emit(this.page + 1);
  }
  onPrevPage() {
    console.log('prev page loading...');
    this.prevPage.emit(this.page - 1);
  }
}
