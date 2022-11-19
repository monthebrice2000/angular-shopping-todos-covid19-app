import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  summaryUrl : string = "https://api.covid19api.com/summary";
  constructor(private httpClient: HttpClient) { }

  async getSummary():Promise<any>{
    return this.httpClient.get(this.summaryUrl, {
      headers: {
        ContentType: 'application/json'
      }
    });
  }
}
