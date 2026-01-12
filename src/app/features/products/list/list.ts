import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart } from '../../../core/services/cart/cart';
import { Products } from '../../../core/services/products/products';


@Component({
  selector: 'product-list',
  imports: [CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})

export class List {
  items: any[] = [];

  constructor(private products: Products, private cart: Cart) {}

ngOnInit() {
  this.products.list().subscribe((res: any) => {
    this.items = res;
  });
}

addToCart(id: number) {
  this.cart.add(id).subscribe(() => {
    // Optionally give feedback
  });
}

}
