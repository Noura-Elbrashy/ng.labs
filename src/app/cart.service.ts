import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './home/home.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<Product[]>(this.loadCart());
  cartItems$ = this.cartItems.asObservable();

  private loadCart(): Product[] {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems.value));
  }

  getCartItems(): Product[] {
    return this.cartItems.value;
  }

  addToCart(product: Product) {
    const items = this.cartItems.value;
    const exists = items.find(item => item.id === product.id);
    if (!exists) {
      const newItems = [...items, product];
      this.cartItems.next(newItems);
      this.saveCart();
    }
  }

  removeFromCart(productId: number) {
    const filtered = this.cartItems.value.filter(item => item.id !== productId);
    this.cartItems.next(filtered);
    this.saveCart();
  }

  clearCart() {
    this.cartItems.next([]);
    localStorage.removeItem('cart');
  }
}
