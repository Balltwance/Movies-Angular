import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  footerLinks = [
    { name: 'ball117', path: '' },
    { name: 'คำถามที่พบบ่อย', path: '' },
    { name: 'ศูนย์ช่วยเหลือ', path: '' },
    { name: 'ข้อกำหนดการใช้งาน', path: '' },
    { name: 'ความเป็นส่วนตัว', path: '' },
    { name: 'การตั้งค่าคุกกี้', path: '' },
    { name: 'ข้อมูลบริษัท', path: '' },
  ];
}
