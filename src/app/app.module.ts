import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { SigninComponent } from './signin-freelancer/signin.component';
import { SignupComponent } from './signup-freelancer/signup.component';
import { ListFreelancersComponent } from './list-freelancers/list-freelancers.component';
import { UpdateFreelancerComponent } from './update-freelancer/update-freelancer.component';
import { SignupAdminComponent } from './signup-admin/signup-admin.component';
import { SignupClientComponent } from './signup-client/signup-client.component';
import { SigninAdminComponent } from './signin-admin/signin-admin.component';
import { SigninClientComponent } from './signin-client/signin-client.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { ListAdminsComponent } from './list-admins/list-admins.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { FreelancerNewsfeedComponent } from './freelancer-newsfeed/freelancer-newsfeed.component';
import { SignoutFreelancerComponent } from './signout-freelancer/signout-freelancer.component';
import { SignoutClientComponent } from './signout-client/signout-client.component';
import { SignoutAdminComponent } from './signout-admin/signout-admin.component';
import { ClientNewsfeedComponent } from './client-newsfeed/client-newsfeed.component';
import { AdminNewsfeedComponent } from './admin-newsfeed/admin-newsfeed.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { TestFlaskComponent } from './test-flask/test-flask.component';
import { PaypalTestComponent } from './paypal-test/paypal-test.component';
import { PdfTestComponent } from './pdf-test/pdf-test.component';
import { PhotosVideosComponent } from './profile/photos-videos/photos-videos.component';
import { TimelineComponent } from './profile/timeline/timeline.component';
import { ProfileAboutComponent } from './profile/profile-about/profile-about.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import { UpdateFreelancerDataProfileComponent } from './update-freelancer-data-profile/update-freelancer-data-profile.component';
import { UpdateClientDataProfileComponent } from './update-client-data-profile/update-client-data-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
    SigninComponent,
    SignupComponent,
    ListFreelancersComponent,
    UpdateFreelancerComponent,
    SignupAdminComponent,
    SignupClientComponent,
    SigninAdminComponent,
    SigninClientComponent,
    ListClientsComponent,
    ListAdminsComponent,
    UpdateClientComponent,
    UpdateAdminComponent,
    FreelancerNewsfeedComponent,
    SignoutFreelancerComponent,
    SignoutClientComponent,
    SignoutAdminComponent,
    ClientNewsfeedComponent,
    AdminNewsfeedComponent,
    CountriesListComponent,
    TestFlaskComponent,
    PaypalTestComponent,
    PdfTestComponent,
    PhotosVideosComponent,
    TimelineComponent,
    ProfileAboutComponent,
    UpdateFreelancerDataProfileComponent,
    UpdateClientDataProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
