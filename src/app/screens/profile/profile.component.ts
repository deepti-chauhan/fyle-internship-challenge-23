import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { DatePipe } from '@angular/common';
import { Observer } from 'rxjs';

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
  perPage: number = 10;
  totalItems: number = 0;
  totalPages: number = 0;
  isLoading: boolean = false;
  isError: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.username = params['query'];
      this.getCurrentUser(this.username);
      this.getCurrentUserRepos(this.username, this.page, this.perPage);
    });
  }

  getCurrentUser(username: string): void {
    this.isLoading = true;
    this.apiService.getUser(username).subscribe({
      next: (data) => {
        this.user = data;
        this.totalItems = this.user.public_repos;
        this.isLoading = false;
        this.isError = false;
      },
      error: (error) => {
        this.isError = true;
        this.isLoading = false;
        console.log('user not found');
      },
    });
  }

  getCurrentUserRepos(username: string, page: number, perPage: number): void {
    this.isLoading = true;
    this.apiService.getRepos(username, page, perPage).subscribe({
      next: (data) => {
        this.repos = data;
        this.totalPages = Math.ceil(this.totalItems / perPage);
        this.isLoading = false;
        this.isError = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.isError = true;
        console.log('repos not found');
      },
    });
  }

  onSearch(query: string) {
    console.log('profile search bar workung ...');

    if (query.trim() !== '') {
      this.router.navigate(['users', query]);
    }

    this.page = 1;
  }

  onDropdownValueChange(value: number) {
    this.perPage = value;
    this.getCurrentUserRepos(this.username, this.page, this.perPage);
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getCurrentUserRepos(this.username, this.page, this.perPage);
  }

  convertTimestampToWeeks(timestamp: string): number {
    const date = new Date(timestamp);
    const weeks = Math.round(
      (Date.now() - date.getTime()) / (1000 * 60 * 60 * 24 * 7)
    );
    return weeks;
  }
}
