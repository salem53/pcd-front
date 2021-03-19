import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {SidebarLeftComponent} from './sidebar-left/sidebar-left.component';
import {SidebarRightComponent} from './sidebar-right/sidebar-right.component';
import {SignupComponent} from './signup-freelancer/signup.component';
import {SigninComponent} from './signin-freelancer/signin.component';
import {ListFreelancersComponent} from "./list-freelancers/list-freelancers.component";
import {UpdateFreelancerComponent} from "./update-freelancer/update-freelancer.component";
import {SigninClientComponent} from "./signin-client/signin-client.component";
import {ListClientsComponent} from "./list-clients/list-clients.component";
import {UpdateClientComponent} from "./update-client/update-client.component";
import {SigninAdminComponent} from "./signin-admin/signin-admin.component";
import {SignupAdminComponent} from "./signup-admin/signup-admin.component";
import {ListAdminsComponent} from "./list-admins/list-admins.component";
import {UpdateAdminComponent} from "./update-admin/update-admin.component";
import {SignupClientComponent} from "./signup-client/signup-client.component";
import {FreelancerNewsfeedComponent} from "./freelancer-newsfeed/freelancer-newsfeed.component";
import {SignoutFreelancerComponent} from "./signout-freelancer/signout-freelancer.component";
import {FreelancerAuthGuardService} from "./services/freelancer/freelancer-auth-guard.service";
import {SignoutClientComponent} from "./signout-client/signout-client.component";
import {SignoutAdminComponent} from "./signout-admin/signout-admin.component";
import {ClientNewsfeedComponent} from "./client-newsfeed/client-newsfeed.component";
import {AdminNewsfeedComponent} from "./admin-newsfeed/admin-newsfeed.component";
import {AdminAuthguardService} from "./services/admin/admin-authguard.service";
import {ClientAuthguardService} from "./services/client/client-authguard.service";

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/home' },

  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sidebar-left', component: SidebarLeftComponent },
  { path: 'sidebar-right', component: SidebarRightComponent },
  { path: 'signin-freelancer', component: SigninComponent },
  { path: 'signup-freelancer', component: SignupComponent },
  { path: 'signout-freelancer', component: SignoutFreelancerComponent,canActivate: [FreelancerAuthGuardService] },
  { path: 'newsfeed-freelancer', component: FreelancerNewsfeedComponent,canActivate: [FreelancerAuthGuardService] },
  { path: 'freelancers', component: ListFreelancersComponent,canActivate: [AdminAuthguardService] },
  { path: 'signin-client', component: SigninClientComponent },
  { path: 'signup-client', component: SignupClientComponent },
  { path: 'signout-client', component: SignoutClientComponent,canActivate: [ClientAuthguardService] },
  { path: 'newsfeed-client', component: ClientNewsfeedComponent ,canActivate: [ClientAuthguardService]},
  { path: 'clients', component: ListClientsComponent,canActivate: [AdminAuthguardService] },
  { path: 'signin-admin', component: SigninAdminComponent },
  { path: 'signup-admin', component: SignupAdminComponent,canActivate: [AdminAuthguardService] },
  { path: 'signout-admin', component: SignoutAdminComponent,canActivate: [AdminAuthguardService] },
  { path: 'newsfeed-admin', component: AdminNewsfeedComponent,canActivate: [AdminAuthguardService] },
  { path: 'admins', component: ListAdminsComponent,canActivate: [AdminAuthguardService] },
  { path: 'updateFreelancer/:id', component: UpdateFreelancerComponent,canActivate: [AdminAuthguardService] },
  { path: 'updateClient/:id', component: UpdateClientComponent,canActivate: [AdminAuthguardService] },
  { path: 'updateAdmin/:id', component: UpdateAdminComponent,canActivate: [AdminAuthguardService] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
