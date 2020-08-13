import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ShoppingCartService {
    private postsList: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
    currentList = this.postsList.asObservable();
    private cartList: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
    currentCartList = this.cartList.asObservable();

    constructor() { }

    modifiedList(post, quantity){
        let newList: any[] = []
        const currentValue = this.postsList.value;
        currentValue.forEach((item, index) => {
            if (item.id === post.id) { 
                newList.push({
                    id: item.id,
                    title: item.title,
                    image: item.image,
                    quantity: item.quantity + quantity,
                    price: quantity * parseInt(post.price) + parseInt(item.price)
                })
            } else {
                newList.push(item)
            }
        });
        return newList
    }

    changeShoppingCart(post: any, quantity: any) {
        const currentValue = this.postsList.value;
        let counter = 0;
        let updatedValue;
        let newList: any[] = []
        currentValue.forEach((item, index) => {
            if (item.id === post.id) { 
                newList = this.modifiedList(post, quantity)
            } else {
                counter++;
            }
        });
        if(counter === currentValue.length) {
            post.quantity = quantity;
            updatedValue = [...currentValue, post];
        } else {
            updatedValue = newList;
        }
        this.postsList.next(updatedValue);
    }

    deleteFromShoppingCart(post: any){
        const currentValue = this.postsList.value;
        currentValue.forEach((item, index) => {
            if (item.id === post.id) { currentValue.splice(index, 1); }
        });
        this.postsList.next(currentValue);
    }
}