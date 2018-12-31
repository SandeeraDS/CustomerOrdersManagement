import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule }      from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomersComponent } from "./customers/customers.component";
import { CustomerListComponent } from "./customers/customer-list/customer-list.component";
import { FilterTextboxComponent } from "./customers/customer-list/filter-textbox/filter-textbox.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerListComponent,
    FilterTextboxComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
