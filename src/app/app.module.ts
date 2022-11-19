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
import { NotFoundComponent } from './not-found/not-found.component';
import { ShoppingDetailComponent } from './shopping-detail/shopping-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorldSummaryComponent } from './world-summary/world-summary.component';
import { CountrySummaryComponent } from './country-summary/country-summary.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {TodoService} from "./todo.service";
import {InputSwitch, InputSwitchModule} from "primeng/inputswitch";
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  {
    path:"",
    redirectTo: "/lists",
    pathMatch: "full"
  },
  {
    path:"lists",
    component: ShoppingComponent
  },
  {
    path: "lists/:id",
    component: ShoppingDetailComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "register",
    component: RegisterFormComponent
  },
  {
    path: "todos",
    component: TodoListComponent,
    children: [
      {
        path: "",
        component: TodoFormComponent
      }
    ]
  },
  {
    path: "**",
    component: NotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    NotFoundComponent,
    ShoppingDetailComponent,
    DashboardComponent,
    WorldSummaryComponent,
    CountrySummaryComponent,
    TodoFormComponent,
    TodoListComponent,
    RegisterFormComponent
  ],
  imports: [
    RouterModule.forRoot( routes, { useHash: false} ),
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
    InputSwitchModule,
    ToastModule,
    HttpClientModule
  ],
  providers: [ShoppingService, MessageService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
