import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ShoppingItemDTO} from "../../assets/models/ShoppingItemDTO";
import {ShoppingService} from "../shopping.service";

@Component({
  selector: 'app-shopping-detail',
  templateUrl: './shopping-detail.component.html',
  styleUrls: ['./shopping-detail.component.css']
})
export class ShoppingDetailComponent implements OnInit {

  selectedItem : ShoppingItemDTO | undefined = {}
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( res => {
      const item : any = res.get("item");
      this.selectedItem = JSON.parse( item )
      if( !this.selectedItem || !this.selectedItem._id )
        this.router.navigate(['/not-found'])
    } , err => [])
  }

}
