import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ShoppingCartService {

    private postsList: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
    currentList = this.postsList.asObservable();
  
    constructor() { }
    
    changeShoppingCart(post: any) {
        const currentValue = this.postsList.value;
        const updatedValue = [...currentValue, post];
        this.postsList.next(updatedValue);
    }
}