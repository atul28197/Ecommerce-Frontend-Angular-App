import { Injectable } from "@angular/core";
import { ApiService } from "../api/api";

@Injectable({ providedIn: 'root' })
export class AdminReport {
  constructor(private api: ApiService) {}

  get() {
    return this.api.get('/admin/report');
  }
}
