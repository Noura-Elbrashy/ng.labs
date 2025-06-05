
import { Component , OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router ,RouterModule} from '@angular/router';
import { CartService } from '../cart.service';
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  stock?: number;
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;

  constructor(private http: HttpClient, private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
  this.http.get<Product[]>('https://fakestoreapi.com/products/category/electronics').subscribe({
    next: (data) => {
      this.products = data.map(product => ({
        ...product,
        stock: Math.floor(Math.random() * 10) 
      }));
    },
    error: (err) => {
      console.error('Error loading products:', err);
    }
  });
}

  openProductDetails(product: Product) {
    this.selectedProduct = product;
  }

  closeProductDetails() {
    this.selectedProduct = null;
  }

  scrollToProducts() {
    const section = document.getElementById('products-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  goToDetails(productId: number) {
  this.router.navigate(['/product', productId]);
}

addToCart(product: Product) {
  this.cartService.addToCart(product);
  alert(`${product.title} added to cart!`);
}

}
