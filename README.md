# Fyle Frontend Challenge

## 🔍GitHub Finder

Its a web application that allows users to search for GitHub users and view their profiles and repositories.

## Key features of a GitHub Finder

- 🔍 `User Search` : Users can search for GitHub users by username.
- 👥 `User Profile` : Once a user is found, their profile information is displayed, including their avatar, username, bio, location, number of followers, number of repositories, etc.
- ↔ `Pagination` : If there are many repositories, pagination may be implemented to navigate through multiple pages of results.
- ❌`Error Handling` : Proper error handling is essential, including displaying friendly messages for errors such as user not found or API rate limiting.
- 📥`Caching` : By caching the retrieved data locally, subsequent requests for the same data can be served from the cache instead of making redundant API calls
- ⏳`loading` : skeleton loading effect helps in providing a better user experience when making API calls in web applications. 

## Tech & Tools

-   Angular JS
-   TailWind CSS
-   [GitHub API](https://api.github.com/) ↗


## Who is this for?

This challenge is meant for candidates who wish to intern at Fyle and work with our engineering team. The candidate should be able to commit to at least 6 months of dedicated time for internship.

## Installation

1. Fork this repository to your github account.
2. Clone the forked repository and proceed with steps mentioned below.

### Install requirements

- Install angular cli [Ref](https://angular.io/cli)
- `npm install` in this repository

## Development server

Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Testing 

Execute unit tests to ensure the correctness of individual components and services.

Run `ng test` to start the Karma test runner and run all unit tests.
Review the test results displayed in the terminal or command prompt.

## Further help

Visit the [Angular Documentation](https://angular.io/guide/styleguide) to learn more.
Styling is to be strictly done with [Tailwind](https://tailwindcss.com/docs/installation).
