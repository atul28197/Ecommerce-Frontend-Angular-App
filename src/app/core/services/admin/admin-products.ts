import { Injectable } from '@angular/core';
import { ApiService } from '../api/api';

@Injectable({ providedIn: 'root' })
export class AdminProductsApi {
  constructor(private api: ApiService) {}

  create(payload: any) {
    return this.api.post('/products', payload);
  }

  list() {
    return this.api.get('/products');
  }

  get(id: number) {
    return this.api.get(`/products/${id}`);
  }

  update(id: number, payload: any) {
    return this.api.put(`/products/${id}`, payload);
  }
}
