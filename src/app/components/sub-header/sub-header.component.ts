import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-sub-header',
  imports: [MatButtonModule, MatMenuModule, MatIconModule, CommonModule],
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.scss',
})
export class SubHeaderComponent {
  isScrolled = false;
  transitionProgress = 0; // ค่าระหว่าง 0 ถึง 1

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 100;
  }
  profile = [
    {
      name: 'k115',
      path: '',
      src: 'https://occ-0-8018-64.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeT8g5bmhq83V6hksRvfpt6QPvfMN9L2Y1FhBFG-n1V0Ghg0xf3iLUJq-XzwBTDRj_piaKPUguerv2CNgivkzUEGllFYtIG9uA.png?r=528',
    },
    {
      name: 'asdwdwd',
      path: '',
      src: 'https://occ-0-8018-64.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABelkMs-h2DXUYbzHHCaFQo7ykBvO6JoCssR5azSK1jNcUTRExSzh9R1HNbNbWzIhTri5iN8U3N9GSmbXeLASZqL5IKRHLri1PA.png?r=1d4',
    },
    {
      name: 'zazas',
      path: '',
      src: 'https://occ-0-8018-64.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABakRc13qnznu9gXCjeNTetIpWLBYv1BHtjenkcA2UPHsk_oKNyiEjMqDg5JrLMa6B-Ynairtq2_fSFPjKJ6mqB2xuIeeCZm23A.png?r=e6e',
    },
    {
      name: 'ioio41',
      path: '',
      src: 'https://occ-0-8018-64.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTRWEBsHFNtCYoz5JbkqcXzqV_7Av6U_fWbAdlLgm9t2ZyLXTeug7cbasJzeK5KfCUNTpDFGzgflkMUJQ7zRH_eunGhccGJGxg.png?r=201',
    },
  ];

  profilelinks = [
    { name: 'จัดการโปรไฟล์', path: '/tv-program', key: 'edit' },
    { name: 'ออกจากโปรไฟล์', path: '/home', key: 'logout' },
    { name: 'ย้ายโปรไฟล์', path: '', key: 'switch_account' },
    { name: 'บัญชี', path: '', key: 'account_circle' },
    { name: 'ศูนย์ช่วยเหลือ', path: '', key: 'help_outline' },
  ];

  visible = true;

  hide() {
    this.visible = false;
  }

  show() {
    this.visible = true;
  }
}
