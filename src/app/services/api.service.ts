import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { tap, throwError } from 'rxjs';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getUser(githubUsername: string): Observable<any> {
    const cacheKey = `user_${githubUsername}`;

    const userCache = sessionStorage.getItem(cacheKey);
    if (userCache) {
      console.log('user data fetch using cache');
      return of(JSON.parse(userCache));
    } else {
      // console.log("user cache : ", this.userCache ,githubUsername)
      return this.httpClient
        .get(`https://api.github.com/users/${githubUsername}`)
        .pipe(
          tap((user) => {
            sessionStorage.setItem(cacheKey, JSON.stringify(user));
          }),
          catchError((error) => {
            console.error('error in getting user info : ', error);
            return throwError(() => error);
          })
        );
    }
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params

  getRepos(
    githubUsername: string,
    page: number,
    perPage: number
  ): Observable<any> {
    const cacheKey = `repos_${githubUsername}_${page}_${perPage}`;
    const reposCache = sessionStorage.getItem(cacheKey);
    if (reposCache) {
      console.log('repo fetch using cache');
      return of(JSON.parse(reposCache));
    } else {
      return this.httpClient
        .get(
          `https://api.github.com/users/${githubUsername}/repos?page=${page}&per_page=${perPage}&sort=updated`
        )
        .pipe(
          tap((data) => {
            sessionStorage.setItem(cacheKey, JSON.stringify(data));
          }),
          catchError((error) => {
            console.error('error in fetching repos : ', error);
            return throwError(() => error);
          })
        );
    }
  }
}
