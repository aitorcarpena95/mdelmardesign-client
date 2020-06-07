import { Component, OnInit, Output } from '@angular/core';
import { CartService, BaseCartItem } from 'ng-shopping-cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService<BaseCartItem>) { }

  ngOnInit() {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }
  }

  emptyCart() {
    this.cartService.clear();

  }
}
