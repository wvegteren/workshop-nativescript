import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// Lesson 1
import { ProfileComponent } from "./profile/profile.component";

// Lesson 2
import { ColorComponent, BlueComponent, RedComponent, RGBComponent } from './color'

// Lesson 3
import { LaunchService } from "./spacex/services/launch.service"
import { HomeComponent } from "./spacex/views/home/home.component";
import { ListComponent } from "./spacex/views/list/list.component";
import { DetailComponent } from "./spacex/views/detail/detail.component";

// Lesson 4
import { WizardProfileComponent } from './plugins/wizard-profile.component';


@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,
    NativeScriptFormsModule,
  ],
  declarations: [
    AppComponent,
    // Lesson 1
    ProfileComponent,
    // Lesson 2
    ColorComponent,
    BlueComponent,
    RedComponent,
    RGBComponent,
    // Lesson 3
    HomeComponent,
    ListComponent,
    DetailComponent,
    // Lesson 4
    WizardProfileComponent,
  ],
  providers: [
    LaunchService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
