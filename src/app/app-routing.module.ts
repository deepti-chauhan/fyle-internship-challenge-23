import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: SearchBarComponent },
  { path: 'users/:githubUsername', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
