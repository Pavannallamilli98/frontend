import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Stock } from './stock';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {
  
  stockModel : Stock[];
  //stockInfo :Stock;
  //addStockInfo:Stock;
   stockInfo :Stock={
     "stockId": 0,
     "uniformItem": "",
     "uniformType": "",
     "quantityOnHand": 0,
     "unitPrice": 0,
     "size": "",
     "status": "",
     "vendor": {
       "vendorId": 0,
       "vendorName": "",
       "contactNo": 0,
       "address": "",
     },
   };
  addStockInfo : Stock = {
    "stockId": 0,
    "uniformItem": "",
    "uniformType": "",
    "quantityOnHand": 0,
    "unitPrice": 0,
    "size": "",
    "status": "",
    "vendor": {
      "vendorId": 0,
      "vendorName": "",
      "contactNo": 0,
      "address": "",
    },
  };
  addStockInfoStatus:any;
  searchId : number=0;
  sizes : string[];


  constructor(private stockservice:StockService) { 
    this.stockModel = [];
   // this.stockInfo = new Stock();
    //this.addStockInfo = new Stock();
    this.addStockInfoStatus = {};
    this.sizes = ['S','M','XL','XXL']
   
  }
  getstockInfo():void{
    this.stockservice.getAllStock().subscribe((res:Stock[])=>{
      this.stockModel = res;
    })
  }
  searchStock():void{
    this.stockservice.getAllStocks(this.searchId).subscribe((res:Stock)=>{
      this.stockInfo = res;
    },(errorRes)=>{
      console.log(errorRes); 
    })
  }
  addStock():void{
    this.stockservice.addStock(this.addStockInfo).subscribe((res)=>{
      this.addStockInfoStatus = res;
    })
  }
}


