import { Input, EventEmitter, Output, Component, OnInit } from '@angular/core';
import { ShoppingCartService } from "../../services/shoppingCart.service";

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
    @Input('shoppingCart') shoppingCart: any;
    @Output() closeModalEvent = new EventEmitter();
    posts:any;
    constructor(private cart: ShoppingCartService) { }

    ngOnInit() {
        this.cart.currentList.subscribe(posts => {
            this.posts = posts
        })
    }

    deleteFromCart(post){
        this.cart.deleteFromShoppingCart(post)
    }
}
