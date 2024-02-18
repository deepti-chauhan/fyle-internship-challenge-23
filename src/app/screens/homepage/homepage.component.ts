import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  constructor(private router: Router) {}

  onSearch(query: string) {
    if (query.trim() !== '') {
      this.router.navigate(['users',query]);
    }
  }
}
