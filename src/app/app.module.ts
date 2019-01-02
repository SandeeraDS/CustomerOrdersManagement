import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomersComponent } from "./customers/customers.component";
import { CustomerListComponent } from "./customers/customer-list/customer-list.component";
import { FilterTextboxComponent } from "./customers/customer-list/filter-textbox/filter-textbox.component";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { OrdersComponent } from './orders/orders.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerListComponent,
    FilterTextboxComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
