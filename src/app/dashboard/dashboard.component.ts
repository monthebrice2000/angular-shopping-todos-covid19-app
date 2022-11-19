import { Component, OnInit } from '@angular/core';
import {Covid19Service} from "../covid19.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  worldSummaryData : any;
  countriesSummaryData : any;

  constructor(private covid19Service: Covid19Service, private router: Router) { }

  ngOnInit(): void {
    this.getSummary();
  }

  async getSummary(): Promise<any>{

      let observable = await this.covid19Service.getSummary();
      observable.subscribe(
        (res:any) => {
          console.log( res )
        let summary = res;
        this.worldSummaryData = summary.Global;
        this.countriesSummaryData = summary.Countries;
      },
        (err:any) => { this.router.navigate(['/error'] ) }  )
    }



}
