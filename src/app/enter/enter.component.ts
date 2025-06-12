import { Component } from '@angular/core';
import { ButtonComponent } from "../components/button/button.component";
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from "../components/custom-input/custom-input.component";
@Component({
  selector: 'app-enter',
  imports: [ButtonComponent, CommonModule, CustomInputComponent],
  templateUrl: './enter.component.html',
  styleUrl: './enter.component.scss'
})
export class EnterComponent {
  trendingMovies = [ { id: 1, title: 'สงคราม', img: 'สงคราม.jpg' },
    { id: 2, title: 'Mission', img: 'mission.jpg' },
    { id: 3, title: 'สายรัก', img: 'สายรัก.jpg' },
    { id: 4, title: 'ปราสาท', img: 'ปราสาท.jpg' },
    { id: 5, title: 'นักเรียนเดือด', img: 'นักเรียนเดีดือด.jpg' },
    { id: 6, title: 'คุณชาย', img: 'คุณชาย.jpg' },
    { id: 7, title: 'เมื่อตะวัน', img: 'เมื่อตะวัน.jpg' },
    { id: 8, title: 'โครตเซียน', img: 'โครตเซียน.jpg' },
    { id: 9, title: 'วัยหนุ่ม', img: 'วัยหนุ่ม.jpg' },
    { id: 10, title: '404', img: '404.jpg' },

  ];
  scrollLeft() {
    const el = document.getElementById('trending-scroll');
    if (el) el.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    const el = document.getElementById('trending-scroll');
    if (el) el.scrollBy({ left: 300, behavior: 'smooth' });
  }

}
