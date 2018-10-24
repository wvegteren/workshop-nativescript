import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { ColorComponent, BlueComponent, RedComponent, RGBComponent } from './color'

import { WizardProfileComponent } from './plugins/wizard-profile.component';
import { HomeComponent } from './spacex/views/home/home.component';
import { ListComponent } from './spacex/views/list/list.component';
import { DetailComponent } from './spacex/views/detail/detail.component';

const routes: Routes = [
  // { path: '', redirectTo: '/profile', pathMatch: 'full' },
  // { path: '', redirectTo: '/color', pathMatch: 'full' },
  { path: '', redirectTo: '/spacex', pathMatch: 'full' },
  // { path: '', redirectTo: '/plugins', pathMatch: 'full' },

  // Lesson 1
  { path: 'profile', component: ProfileComponent },

  // Lesson 2
  { path: 'color', children: [
      { path: '', component: ColorComponent },
      { path: 'blue', component: BlueComponent },
      { path: 'red', component: RedComponent },
      { path: 'rgb/:rgb', component: RGBComponent },
    ]},

  // Lesson 3
  { path: 'spacex', children: [
      { path: "", component: HomeComponent },
      { path: "home", component: HomeComponent },
      { path: "list", component: ListComponent },
      { path: "detail/:id", component: DetailComponent },
    ]},

  // Lesson 4
  { path: 'plugins', component: WizardProfileComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
