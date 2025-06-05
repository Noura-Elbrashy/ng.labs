// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-product',
//   standalone: true,
//   imports: [],
//   templateUrl: './product.component.html',
//   styleUrl: './product.component.css'
// })
// export class ProductComponent {

// }
import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
 product: any;
 
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`https://fakestoreapi.com/products/${id}`).subscribe({
      next: (data) => this.product = data,
      error: (err) => console.error('Error loading product details', err)
    });
  }
}
