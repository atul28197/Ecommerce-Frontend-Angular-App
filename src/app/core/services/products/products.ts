import { Injectable } from '@angular/core';
import { ApiService } from "../api/api";

@Injectable({ providedIn: 'root' })
export class Products {
  constructor(private api: ApiService) {}

  list() {
    return this.api.get('/products');
  }

  get(id: number) {
    return this.api.get(`/products/${id}`);
  }

  create(payload: any) {
    return this.api.post('/products', payload);
  }
}
