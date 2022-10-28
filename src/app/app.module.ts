import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AutoCompleteModule} from "primeng/autocomplete";
import {FormsModule} from "@angular/forms";
import {ListboxModule} from "primeng/listbox";
import { ShoppingComponent } from './shopping/shopping.component';
import {ShoppingService} from "./shopping.service";
import {RippleModule} from "primeng/ripple";
import {ButtonDirective, ButtonModule} from "primeng/button";
import {ChipModule} from "primeng/chip";
import {HttpClientModule} from "@angular/common/http";
import {Router, RouterModule, Routes} from "@angular/router";
import {BadgeModule} from "primeng/badge";
import {StyleClassModule} from "primeng/styleclass";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {InputNumberModule} from "primeng/inputnumber";
import {ToolbarModule} from "primeng/toolbar";
import {RatingModule} from "primeng/rating";
import {FileUploadModule} from "primeng/fileupload";
import {ProgressBarModule} from "primeng/progressbar";
import {InputTextModule} from "primeng/inputtext";
import {ToastModule} from "primeng/toast";
import {DropdownModule} from "primeng/dropdown";
import {ContextMenuModule} from "primeng/contextmenu";
import {MultiSelectModule} from "primeng/multiselect";
import {DialogModule} from "primeng/dialog";
import {SliderModule} from "primeng/slider";
import {CalendarModule} from "primeng/calendar";
import {TableModule} from "primeng/table";
import {CheckboxModule} from "primeng/checkbox";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {MessagesModule} from "primeng/messages";
import {MessageService} from "primeng/api";

const routes: Routes = [
  {
    path:"",
    redirectTo: "/lists",
    pathMatch: "full"
  },
  {
    path:"lists",
    component: ShoppingComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent
  ],
  imports: [
    RouterModule.forRoot( routes ),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AutoCompleteModule,
    ListboxModule,
    RippleModule,
    ButtonModule,
    BadgeModule,
    StyleClassModule,
    ChipModule,
    TableModule,
    CheckboxModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    ProgressSpinnerModule,
    ToastModule,
    HttpClientModule
  ],
  providers: [ShoppingService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
