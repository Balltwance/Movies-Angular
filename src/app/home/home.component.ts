import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; // 
import { ButtonComponent } from '../components/button/button.component';

@Component({
  selector: 'app-home',
  standalone: true, // 
  imports: [CommonModule, ButtonComponent], // 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'], 
})
export class HomeComponent {
  isScrolled = false;
  transitionProgress = 0; // ค่าระหว่าง 0 ถึง 1

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 100;
  }

  ngOnInit(): void {
    const duration = 2000; // 2 วินาที
    const interval = 50;   // ปรับทุก 50ms
    let elapsed = 0;

    const fadeInterval = setInterval(() => {
      elapsed += interval;
      this.transitionProgress = Math.min(elapsed / duration, 1);

      if (this.transitionProgress === 1) {
        clearInterval(fadeInterval);
      }
    }, interval);
  }
}