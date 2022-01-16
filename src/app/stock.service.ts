import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Stock } from './stock/stock';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Vendor } from './stock/vendor';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private httpClient:HttpClient) { }
  addStock(stock:Stock):Observable<any>{
    this.getVendorById(stock.vendor.vendorId).subscribe((res:Vendor) => stock.vendor = res);
    console.log(stock);
    return this.httpClient.post("http://localhost:8080/api/stock",JSON.stringify(stock),this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getAllStock():Observable<Stock[]>{
    return this.httpClient.get<Stock[]>("http://localhost:8080/api/stock").pipe(
      retry(2), 
      catchError(this.handleError)
    );
  }

  getAllStocks(stockId:number):Observable<Stock>{
    return this.httpClient.get<Stock>("http://localhost:8080/api/getstock/"+stockId).pipe(
      retry(2), 
      catchError(this.handleError)
    );
  }

  getVendorById(vendorId:number):Observable<Vendor> {
    return this.httpClient.get<Vendor>(`http://localhost:8080/api/getvendor/${vendorId}`).pipe(
      retry(2), 
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Client Side Error :', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}

