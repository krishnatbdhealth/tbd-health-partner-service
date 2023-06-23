import { Metadata } from "../Common/Metadata";
// import { Person } from "../Person/Person";
import { Product } from "./Product";
import { ShippingAddress } from "./shippingAddress";

export interface Order {

  id: string;
  recipient: {};
  shipping: ShippingMethod;
  products: Product;
  shippingAddress: ShippingAddress;
  metadata?: Metadata[];
  status: 'SHIPPED' | 'PENDING' | 'DELIVERED' | 'CANCELLED' | 'COMPLETED';
  kitId?: string;
  parentOrderId?: string;
  preferBulkShipping?: boolean;
}

  
  export interface ShippingMethod {
    id: string;
    name: string;
    minTime: string;
    maxTime: string;
    timeUnit: 'DAYS';
  }
  
 