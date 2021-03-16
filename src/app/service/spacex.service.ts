import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  baseUrl: string = "https://api.spacexdata.com/v3/";

  constructor(private http: HttpClient) { }


  fetchLaunchList(param: number): Observable<any> {

    let newUrl = "";

    switch (param) {
      case 1: newUrl = "launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014";
        break;
      case 2: newUrl = "launches?limit=100";
        break;
      case 3: newUrl = "launches?limit=100&amp;launch_success=true";
        break;
      case 4: newUrl = "launches?limit=100&amp;launch_success=true&amp;land_success=true";
        break;
      default: newUrl = "launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014"
    }

    const apiUrl = new URL(newUrl, this.baseUrl).toString();
    console.log(apiUrl);
    return this.http.get(apiUrl)
  }


}
