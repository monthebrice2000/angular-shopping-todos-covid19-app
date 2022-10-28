import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ShoppingItemDTO} from "../assets/models/ShoppingItemDTO";

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private shoppingUrl : string = "http://localhost:5002"

  constructor(private httpClient: HttpClient) { }

  async getItems():Promise<Observable<any>>{
    return this.httpClient.get(`${this.shoppingUrl}/items`, {
      headers: {
        ContentType : "application/json"
      }
    })
  }

  async createItem( item: ShoppingItemDTO ):Promise<Observable<any>>{
    return this.httpClient.post(`${this.shoppingUrl}/items`, { ...item }, {
      headers: {
        ContentType : "application/json"
      }

    })
  }

  async deleteItem(id: string ):Promise<Observable<any>>{
    return this.httpClient.delete(`${this.shoppingUrl}/items/${id}`, {
      headers: {
        ContentType : "application/json"
      }
    })
  }

  async updateItem(id: string, item: ShoppingItemDTO ):Promise<Observable<any>>{
    return this.httpClient.put(`${this.shoppingUrl}/items/${id}`, {...item}, {
      headers: {
        ContentType : "application/json"
      }
    })
  }
}
