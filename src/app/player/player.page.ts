import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage  {
 
  
  sound: any;
  audioSrc: string='';
  timer: number=0;



  constructor(private router: Router) {
    
    const navigation = this.router.getCurrentNavigation();
    this.sound = navigation?.extras?.state?.['sound'];

    if (this.sound) {
      this.audioSrc = `assets/sounds/${this.sound.file}`;
    }
   }
   
   
   startTimer() {
    if (this.timer && this.timer > 0) {
      setTimeout(() => {
        const audioPlayer = document.querySelector('audio');
        audioPlayer?.pause();  // Optional chaining to prevent error if null
      }, this.timer * 60000);
    }
  }
  
}



  


