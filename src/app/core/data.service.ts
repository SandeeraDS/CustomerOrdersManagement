import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { ICustomer, IOrder } from "../../app/shared/interface";
import { CustomerListComponent } from "../customers/customer-list/customer-list.component";

@Injectable()
export class DataService {
  baseUrl: string = "assets/";

  constructor(private http: HttpClient) {}

  getCustomer(): Observable<ICustomer[]> {
    return;
  }

  private handleError(error: any) {
    console.error("server error:", error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || "Node.js server error");
  }
}
