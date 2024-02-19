import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule} from 'ngx-skeleton-loader'
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginationComponent } from './components/pagination/pagination.component';
import { HomepageComponent } from './screens/homepage/homepage.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { UsernotfoundComponent } from './components/usernotfound/usernotfound.component';
import { FollowersComponent } from './svg-component/followers/followers.component';
import { LocationComponent } from './svg-component/location/location.component';
import { SearchComponent } from './svg-component/search/search.component';
import { ArrowupComponent } from './svg-component/arrowup/arrowup.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ProfileComponent,
    PaginationComponent,
    HomepageComponent,
    DropdownComponent,
    UsernotfoundComponent,
    FollowersComponent,
    LocationComponent,
    SearchComponent,
    ArrowupComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    NgxPaginationModule,
    NgxSkeletonLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
