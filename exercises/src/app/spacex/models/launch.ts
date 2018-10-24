import { Rocket } from "./rocket";
import { LaunchSite } from "./launchSite";
import { Links } from "./links";

export interface Launch {
  flight_number: number;
  launch_year: string;
  launch_date_utc: string;
  launch_success: boolean
  details: string;

  rocket: Rocket;
  launch_site: LaunchSite;
  links: Links;
}