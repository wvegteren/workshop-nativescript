import { Injectable } from "@angular/core";
import { Launch } from '../models/launch'
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LaunchService {
  private baseUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {
  }

  public getUpcomingLaunches(): Observable<Launch[]> {

    return this.http.get<Launch[]>(`${this.baseUrl}/upcoming`);
  }

  public getPastLaunches(): Observable<Launch[]> {
    // 1. construct a HttpParams object that holds the parameters that you want to pass
    // 2. add a parameter 'launch_year'
    // 3. call http get with the url and params

    return this.http.get<Launch[]>(`${this.baseUrl}/past`);
  }

  public getLaunchDetails(flight_number: number): Observable<Launch> {
    // 1. construct a url based on https://api.spacexdata.com/v3/launches/{flight_number}
    // 2. call http get with the url

    return Observable.throw('getLaunchDetails is not implemented')
  }

}