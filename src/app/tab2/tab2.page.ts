import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}

  donationFood() {
    this.openUrl(
      'https://www.google.com/maps/search/?api=1&query=Pontos+de+doação+de+alimentos'
    );
  }

  donationClothes() {
    this.openUrl(
      'https://www.google.com/maps/search/?api=1&query=Pontos+doação+de+Roupa'
    );
  }

  donationBlood() {
    this.openUrl(
      'https://www.google.com/maps/search/?api=1&query=Pontos+doação+de+sangue'
    );
  }

  openUrl(url: string) {
    window.open(url, '_blank').focus();
  }
}
