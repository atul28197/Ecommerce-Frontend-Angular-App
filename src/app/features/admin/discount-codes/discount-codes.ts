import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../core/services/api/api';

@Component({
  selector: 'app-discount-codes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discount-codes.html',
  styleUrls: ['./discount-codes.scss']
})
export class DiscountCodes {
  code: string | null = null;
  loading = false;
  error: string | null = null;

  constructor(private api: ApiService) {}

  gen() {
    this.loading = true;
    this.error = null;
    this.code = null;

    this.api.post('/admin/discount-codes/generate').subscribe({
      next: (res: any) => {
        this.code = res.code;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to generate code';
        this.loading = false;
      }
    });
  }
}
