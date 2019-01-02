import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomersComponent } from "./customers/customers.component";
import { OrdersComponent } from "./orders/orders.component";

const routes: Routes = [
  { path: "", component: CustomersComponent },
  { path: "customers", component: CustomersComponent },
  { path: "orders/:id", component: OrdersComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
