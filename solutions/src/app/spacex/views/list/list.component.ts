import { Component, OnInit } from "@angular/core";
import { Launch } from "../../models/launch";
import { LaunchService } from "../../services/launch.service";

@Component({
  selector: "list",
  moduleId: module.id,
  templateUrl: "./list.component.html",
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  upcoming: Launch[] = [];
  past: Launch[] = [];

  constructor(private launchService: LaunchService) { }

  ngOnInit(): void {
    this.launchService.getUpcomingLaunches()
      .subscribe(data => {
        data.forEach((model) => {
          this.upcoming.push(model);
        });
      });

    this.launchService.getPastLaunches()
      .subscribe(data => {
        data.forEach((model) => {
          this.past.push(model);
        });
      });
  }
}