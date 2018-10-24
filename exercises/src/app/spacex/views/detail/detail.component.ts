import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Launch } from "../../models/launch";
import { Links } from "../../models/links";
import { LaunchService } from "../../services/launch.service";

import * as utils from "utils/utils";

@Component({
  selector: "detail",
  moduleId: module.id,
  templateUrl: "./detail.component.html",
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  launch: Launch;

  constructor(
    private route: ActivatedRoute,
    private launchService: LaunchService) { }

  ngOnInit(): void {
    const flightNumber = this.route.snapshot.params["id"];

    this.launchService.getLaunchDetails(flightNumber).subscribe(model => {
      this.launch = model;
    });
  }

  onLinkTap(link: string) : void {
    utils.openUrl(link);
  }
}