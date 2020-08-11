import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UploadProductComponent } from './components/upload-product/upload-product.component';

const routes: Routes = [
  { path: 'upload', component: UploadProductComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { 
  
}
