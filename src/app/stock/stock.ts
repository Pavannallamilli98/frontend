import { Vendor } from "./vendor";

export class Stock {
   stockId:number;
    uniformItem:string;
    uniformType:string;
    quantityOnHand:number;
    unitPrice:number;
    size:string;
    status:string;
   //vendorId:number;
    vendor: Vendor;
 

    constructor(stockId:number=0,uniformItem:string="",uniformType:string="",quantityOnHand:number=0,unitPrice:number=0,size:string="",status:string="", vendor:Vendor){
        this.stockId = stockId;
        this.uniformItem = uniformItem;
        this.uniformType=uniformType;
        this.quantityOnHand = quantityOnHand;
        this.unitPrice= unitPrice;
        this.size=size;
        this.status=status;
        //this.vendorId=vendorId;
        this.vendor=vendor;
    }
}
