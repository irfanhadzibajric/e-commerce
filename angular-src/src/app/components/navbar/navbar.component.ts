import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  popup: boolean = false;
  shoppingCart: any;
  constructor(
    public authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit(): void { }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('You are logged out', {
      cssClass: 'alert-success',
      timeout: 3000,
    });
    this.router.navigate(['/login']);
    return false;
  }

  onBurgerMenuClick() {
    $("#mobile-menu").toggle();
    return false;
  }

  openShoppingCartModal() {
    this.shoppingCart = null;
    this.popup = true;
  }

  closeModal() {
    this.popup = false;
    this.shoppingCart = null;
  }
}

//do 14min
//moduleWithProviders greska
