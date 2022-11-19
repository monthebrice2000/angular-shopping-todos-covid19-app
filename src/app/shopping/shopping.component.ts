import { Component, OnInit } from '@angular/core';
import {ShoppingService} from "../shopping.service";
import {ShoppingItemDTO} from "../../assets/models/ShoppingItemDTO";
import {MessageService} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  items : ShoppingItemDTO[] = [];
  item : ShoppingItemDTO = {};
  selectedItem : ShoppingItemDTO = {};
  allForm : any = {
    update: {
      title : "Update Shopping Item",
      labelButton: "Update",
      action : (e: Event) => this.updateItem(e),
    },
    create: {
      title : "Create Shopping Item",
      labelButton: "Create",
     action : (e: Event) => this.createItem(e),
    }
  };
  currentForm : any = {};

  constructor(private shoppingService: ShoppingService, private messageService: MessageService, private router: Router, private activatedRoute: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.currentForm = this.allForm.create;
    await this.getItems();
  }

  async getItems():Promise<void>{
    const obsevableItem = await this.shoppingService.getItems();
    obsevableItem.subscribe( (res: any) => {
      this.items = res.items;
      console.log( this.items )
    }, err => [] )
  }

  async createItem(event: Event): Promise<void>{
    const obsevableItem = await this.shoppingService.createItem({...this.item, itemBought: false});
    obsevableItem.subscribe( (res: any) => {
      this.messageService.add({severity:'success', summary: 'Success', detail: res.msg });
      this.getItems();
      this.item = {}
    }, err => [] )
  }

  async deleteItem(item: ShoppingItemDTO): Promise<void>{
    const id : any  = item._id;
    const obsevableItem = await this.shoppingService.deleteItem( id );
    obsevableItem.subscribe( async (res: any) => {
      await this.messageService.add({severity:'success', summary: 'Success', detail: res.msg });
      this.getItems();
    }, err => [] )
  }

  async updateItem(event: Event): Promise<void>{
    const id : any  = this.selectedItem._id;
    const obsevableItem = await this.shoppingService.updateItem( id, { itemBought: this.item.itemBought, itemName: this.item.itemName, itemQuantity: this.item.itemQuantity} );
    obsevableItem.subscribe( async (res: any) => {
      this.selectedItem = {};
      this.currentForm = this.allForm.create;
      this.item = {}
      await this.messageService.add({severity:'success', summary: 'Success', detail: res.msg });
      this.getItems();
    }, err => [] )
  }

  toogleFrom(item: ShoppingItemDTO): void{
    this.currentForm = this.allForm.update;
    this.selectedItem = item;
    this.item = {...item};
  }

  async viewItem(selectedItem: ShoppingItemDTO): Promise<void>{
    let index = 1 + this.items.findIndex( item => item._id === selectedItem._id );
    //this.router.navigate([`/lists/`, index, {item: JSON.stringify({...selectedItem} ) } ] );
    this.router.navigate( [index, {item: JSON.stringify({...selectedItem} ) } ], { relativeTo: this.activatedRoute})
  }

}
