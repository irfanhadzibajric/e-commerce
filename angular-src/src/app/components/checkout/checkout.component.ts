import { Input, EventEmitter, Output, Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shoppingCart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  @Input('shoppingCart') shoppingCart: any;
  @Output() closeModalEvent = new EventEmitter();
  posts: any;
  total: number = 0;

  constructor(private cart: ShoppingCartService) {}

  ngOnInit(): void {
    this.cart.currentList.subscribe((posts) =>{
      this.posts = posts
      this.posts.forEach(post => {
        this.total += post.price
      });
    });
  }
}
