import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { Page } from "ui/page";

@Component({
  selector: "home",
  moduleId: module.id,
  templateUrl: "./home.component.html",
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private routerExtensions: RouterExtensions,
    private page: Page) {

  }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }

  onViewLaunchesTap() : void {
    this.routerExtensions.navigate(["/spacex/list"]);
  }
}