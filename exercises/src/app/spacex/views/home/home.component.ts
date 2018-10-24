import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "home",
  moduleId: module.id,
  templateUrl: "./home.component.html",
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private routerExtensions: RouterExtensions) {

  }

  ngOnInit(): void {
    // 1. hide actionbar

  }

  onViewLaunchesTap() : void {
    this.routerExtensions.navigate(["/spacex/list"]);
  }
}