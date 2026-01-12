import { Injectable } from "@angular/core";
import { ApiService } from "../api/api";

@Injectable({ providedIn: 'root' })
export class DiscountCodesApi {
  constructor(private api: ApiService) {}

  generate() {
    return this.api.post('/admin/discount-codes/generate');
  }
}
