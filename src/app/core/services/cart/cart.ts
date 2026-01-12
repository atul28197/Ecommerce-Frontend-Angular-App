import { Injectable } from '@angular/core';
import { ApiService } from "../api/api";


@Injectable({ providedIn: 'root' })
export class Cart {
  constructor(private api: ApiService) {}

  add(productId: number, qty: number = 1) {
    return this.api.post('/cart/add', { productId, qty });
  }

  get() {
    return this.api.get('/cart');
  }

  clear() {
    return this.api.delete('/cart');
  }
}
