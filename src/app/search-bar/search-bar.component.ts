import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  searchInput: string = '';
  @Output() inputUpdated = new EventEmitter<void>();

  constructor(private router: Router) {}

  searchHandler() {
    console.log(this.searchInput);
    this.router.navigate(
      ['users', this.searchInput]
      // queryParams: { page: 1, per_page: 10 },
    );
  }

  updateData() {
    // Update data
    this.inputUpdated.emit();
  }
}
