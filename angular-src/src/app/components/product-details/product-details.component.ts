import { Input, EventEmitter, Output } from '@angular/core';

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
    @Input('product') product: any;
    @Output() closeModalEvent = new EventEmitter();
    constructor() { }
    ngOnInit(): void {
        console.log(this.product)
    }
    quantity: number = 1;
    i = 1
    plus() {
        if (this.i != 0) {
            this.i++;
            this.quantity = this.i
        }
    }
    minus() {
        if (this.i != 1) {
            this.i--;
            this.quantity = this.i
        }
    }
}
