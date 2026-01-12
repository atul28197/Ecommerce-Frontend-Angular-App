import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminProductsApi } from '../../../../core/services/admin/admin-products';

@Component({
  selector: 'admin-product-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create.html',
})
export class Create {
  title = '';
  price = 0;

  constructor(private adminProducts: AdminProductsApi) {}
  save() {
    this.adminProducts.create({ title: this.title, price: this.price })
      .subscribe(() => {
        // redirect or notify
      });
  }
}
