import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AdminProductsApi } from '../../../../core/services/admin/admin-products';

@Component({
  selector: 'admin-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list.html',
})
export class List implements OnInit {
  products: any[] = [];

  constructor(private adminProducts: AdminProductsApi) {}

  ngOnInit() {
    this.adminProducts.list().subscribe(res => this.products = res as any[]);
  }
}
