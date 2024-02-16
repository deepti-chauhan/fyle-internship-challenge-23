import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  username: string = '';
  user: any[''];
  repos: any[''];
  page: number = 1;
  per_page: number = 10;
  totalItems: number = 0;
  totalPages: number = 0;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.username = params['githubUsername'];
    });

    this.getCurrentUser(this.username);

    this.getCurrentUserRepos(this.username, this.page, this.per_page);
  }

  getCurrentUser(username: string) {
    return this.apiService.getUser(username).subscribe((data) => {
      this.user = data;
      console.log('current user : ', this.user);
    });
  }

  getCurrentUserRepos(username: string, page: number, per_page: number): void {
    this.apiService.getRepos(username, page, per_page).subscribe((data) => {
      this.repos = data; // Assign the retrieved repositories to a component property
      this.totalItems = this.apiService.getTotalRepos(username); // Get total repository count from service
      this.totalPages = Math.ceil(this.totalItems / per_page); // Calculate total pages
      console.log('Repositories:', this.repos);
    });
  }
}
