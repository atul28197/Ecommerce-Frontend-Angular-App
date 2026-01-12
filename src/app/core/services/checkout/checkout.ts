
import { Injectable } from '@angular/core';
import { ApiService } from "../api/api";

@Injectable({ providedIn: 'root' })
export class Checkout {
  constructor(private api: ApiService) {}

  placeOrder() {
    return this.api.post('/checkout');
  }

  placeOrderWithCode(code: string) {
    return this.api.post('/checkout', { code });
  }
}
