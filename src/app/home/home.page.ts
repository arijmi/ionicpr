import { Component } from '@angular/core';

import { NavController } from '@ionic/angular';
interface sound {
  name: string;
  file: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sounds = [
    { name: 'Rain', file: 'rain.mp3' },
    { name: 'Ocean Waves', file: 'ocean.mp3' },
    { name: 'Forest', file: 'forest.mp3' },
  ];

  constructor(private navCtrl: NavController) {}
  playSound(sound:sound) {
    this.navCtrl.navigateForward(`/player`, {
      state: { sound: sound }
    });
  
  }
}
