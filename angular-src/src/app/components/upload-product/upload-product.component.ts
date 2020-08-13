import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-upload-product',
  templateUrl: './upload-product.component.html',
  styleUrls: ['./upload-product.component.css'],
})
export class UploadProductComponent implements OnInit {
  title: string = '';
  image: string = '';
  size: string = '';
  price: string = '';
  quantity: number = 0;

  constructor(private service: PostsService) { }

  ngOnInit(): void {

  }

  doUpload() {
    const post: Post = {
      id: null,
      title: this.title,
      image: this.image,
      size: this.size,
      price: this.price,
      quantity: this.quantity,
    };
  this.service.addPost(post);
  }
}
