import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product/product.service';
import { Products } from '../shared/models/product';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
  product!:Products;
  constructor(private activatedRoute:ActivatedRoute,
    private productService:ProductService, private cartService:CartService, private router:Router) {
    activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.product = productService.getProductById(params['id'])
      })
    }

  ngOnInit(): void {
  }
  
  addToCart(){
    this.cartService.addToCart(this.product);
    this.router.navigateByUrl('/cart-page')
  }
}
