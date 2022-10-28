import { Component } from '@angular/core';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {PrimeNGConfig} from "primeng/api";
import {ShoppingItemDTO} from "../assets/models/ShoppingItemDTO";
import {ShoppingService} from "./shopping.service";
import {resolveFileWithPostfixes} from "@angular/compiler-cli/ngcc/src/utils";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'shopping-list-apis';

  text: string = "";

  results: string[] = ["test"];

  cities : Object[] = [];

  selectedCity: Object = '';

  async ngOnInit() {
    this.primengConfig.ripple = true;
  }

  constructor(private primengConfig: PrimeNGConfig) {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
  }

  search(event : any) {
    console.log("+++++++++++");
    /*this.mylookupservice.getResults(event.query).then(data => {
      this.results = data;
    });*/
  }



}
