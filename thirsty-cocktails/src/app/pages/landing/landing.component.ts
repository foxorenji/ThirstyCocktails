import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

   public playSound() : void {
    const audioEffect = new Audio();
    audioEffect.volume = 0.5;
    audioEffect.src = './assets/sounds/pouring-sound.mp3';
    audioEffect.load();
    audioEffect.play().then();
  }
}
