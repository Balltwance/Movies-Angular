import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common'; //
import { SwiperComponent } from '../components/swiper/swiper.component';
import { ButtonComponent } from '../components/button/button.component';

@Component({
  selector: 'app-home',
  standalone: true, //
  imports: [CommonModule, SwiperComponent, ButtonComponent], //
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isScrolled = false;
  transitionProgress = 0; // ค่าระหว่าง 0 ถึง 1
  showContent = signal(true);
  isFading = signal(false);
  isScaled = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 100;
  }
  public sections = [
    { title: 'เรื่องต่อไปที่คูนอาจชอบ' },
    { title: 'ใหม่ล่าสุด' },
    { title: 'ใครๆก็ชอบ' },
  ];
  constructor() {
    // เริ่ม fade-out ที่ 5.5 วิ
    setTimeout(() => this.isFading.set(true), 5000);
    setTimeout(() => {
      this.isScaled.set(true);
    }, 5000);
    // หายจาก DOM ที่ 6 วิ
    setTimeout(() => this.showContent.set(false), 6000);
  }

  public movies = [
    {
      title: '/assets/img/unicorntitle.webp',
      url: 'https://occ-0-8018-64.1.nflxso.net/so/soa7/272/1915307573565347840.mp4?v=1&e=1749837177&t=xSksRxUqqlygdFJDGR2dxyanSNY',
      content:
        'สันติ นักลงทุนไฟแรงใฝฝันที่ตะประสบความสำเร็จแบบถลมทลายด้วยใอเดียการทำธุกิจขนส่งพัสดุที่จะเขย่าวงการแต่บรรดาคู่แข่งก็พยายามทำทุกวิถีทางเพื่อครองตำแหน่งเจ้าตลาด',
    },
    {
      title: '/assets/img/viking.webp',
      url: 'https://occ-0-8018-64.1.nflxso.net/so/soa2/609/1801528549594927616.mp4?v=1&e=1749848862&t=_JioWP64OrhGDFo-BNCWZfuGevU',
      content:
        'เรื่องราวของชาวไวกิ้งที่มีความเชื่อว่าโลกนี้มี 9 โลก และโลกมนุษย์คือ Midgard ที่อยู่ตรงกลางของจักรวาล และมีอีก 8 โลกที่ล้อมรอบอยู่รอบๆ ซึ่งแต่ละโลกก็มีความเป็นเอกลักษณ์และอันตรายที่แตกต่างกันไป',
    },
    {
      title: '/assets/img/sweet.webp',
      url: 'https://occ-0-8018-64.1.nflxso.net/so/soa6/420/baf6ff6aa263822191e2d01669a9a900.mp4?v=1&e=1749848455&t=sgp6hgRFQ9CN0EZHExfEA9uiPc4',
      content:
        'หลังจากที่ไวรัสเอชห้าจีเก้าแพร่ระบาด เผ่าพันธุ์มนุษย์ก็ถูกกวาดล้างไปเกือบหมดเหลือไว้เพียงแค่คนที่แข็งแรงและสามารถอยู่รอดภายใต้ไวรัสได้ แต่ที่น่าอัศจรรย์ก็คือ มีกลุ่ม ไฮบริด เกิดขึ้นมาหรือที่เรียกกันว่า มนุษย์ครึ่งคนครึ่งสัตว์ มนุษย์บางคนที่อยู่รอดก็แบ่งออกเป็น 2 ฝ่าย ฝ่ายที่ตามล่าไฮบริดเพราะคนพวกนี้เชื่อ',
    },
  ];
  public slides = [
    'Slide #1',
    'Slide #2',
    'Slide #3',
    'Slide #4',
    'Slide #5',
    'Slide #6',
    'Slide #7',
    'Slide #8',
    'Slide #9',
    'Slide #10',
    'Slide #11',
    'Slide #12',
    'Slide #13',
    'Slide #14',
    'Slide #15',
    'Slide #16',
    'Slide #17',
    'Slide #18',
    'Slide #19',
    'Slide #20',
  ];

  public imgpathsOriginal = [
    'https://occ-0-8018-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABW2Z0TyTdBYQDz7p8tIIqFHWqujP4kLwwKpmQmUfg4qjg1u5WDzjFR3MP_GKGxC_qVl5fmz8zHqp-nVstp4v-kP-QVwSZq1Bv9U-Cj6LTWL5PoN-lYTehx65Wi88VTeFhIyu8A54PErMRFhPD3ZTMVeaZIfklO3Wm14brr_UBIoGl_Ra4gcwHdd3QHHu7u5HAgGy1wSzk4TWs5Se9jEqF4yYU4XjLkAs0jkAGJWpo1gvkGg5c2tEQp4GYVFpx6ackV-r7YDO73vEW6lHixaHUSGWc4LC-zRdezik18gKTdNqug.jpg?r=4f6',
    'https://occ-0-8018-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABS60Q1kJeXC770VqcEEP_wnDByClF-JC0mHt4CjEQLFLyF6kjb71Liy1t88fOSL009lcgPmiu1BkvbwvsxXccQe0L1abJk9h6BgM2TLI8NWB3uKNxc39QyjMW4haDucRTBsQi08uBDW-ISgDJYWpI9CX0puLN2v4jr98Uos74HKrdHhz3RmL_jZIfjuTbgb0CmHJIhkFx2H5JklDGpVroFV69hAcdA.jpg?r=585',
    'https://occ-0-8018-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRPcTDi3tstIK11hbG-Vb5eGiRZaK7A9s5PGFooROjS3uoOrrz4MkXVMobUVK0u40-mcYB3nWetOAMW0p1KY6caEB5dQnDdgyxFnOEne3b2T4WGGD0DahhahcdAY3BKkoAtjxUzPBjrFcOHcfEnpUcULqGYKwi7dYy-mepMDuU9yITSPRGZKHSpg9XB_Wd6-tNImt8fZ7ZjBJu_AS0C5AZSECn-zVABuXQZyzYpHj9E0rH0DHjAPZNrYvYL89eMTebHBymvRxHYC_TcP11FbbD165cgJTrI67WgeAhHD8Z59BlTWy8w2iQ_-oQo6fjAKraKNZ_zNdJH_G7_k2eJhvXTsOKNBUGY_iF24uRHft0CRZMXPHYzNKalRnJ1nqxDXUpRdAHs.jpg?r=8c6',
    'https://occ-0-8018-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfkhiDyZBqbuMEPk7s8m0JCiLxOkCO5zq7DRxwpTTZn_iWXDdOLD9gdkhQNX3TMgfIMStLSXsXSSe7f7xMes3Kq5tUN3KaB-iBKLdp7qZuElWQ7xT7X1jbiYU8FV0pd2PRLNLLQqYqkJ1mLQ73ubNb-rOx1zWe-BUenH2P4xkyOQ2CRMr9BYr5Mahc7y0n7g4bJ2SIZK2NoUAz03A0yphabdSkN0MQF8FOw88RZbm8HtTR93BqAK-mwMVMifpqcug699K58d1cD4f9WZ51Io_2VucfPfo8IuiQ1TJVsD38jJrg.jpg?r=d32',
    'https://occ-0-8018-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSxLiGHA5pSPp6hIKN9GrdMM0OAVgRkNvVVpj5Vd4jIqm3kNP8wbxu9yTgcYLJwBb0t4rmtUfT8L1vfwk000E8dDPEVujKk8cx6SAEEIci0xhUXuwyzMIG3MVXL0-ToLDWGM.jpg?r=082',
    'https://occ-0-8018-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd6YkXmALjzZuabr6dgnZIiMMx8LUnJETDdz5fWYFQeNodtT883vmqos_8H1nPNxvtJ5-k60G5qBDtYNixbF0H5hUy99fCZ_w7bdOrGWEoIgCaVEeT9ZrmHdHDcKYA5Krgp2.jpg?r=a18',
    'https://occ-0-8018-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTFjA6_iPcu6HsiFmC91_4dfrJcedMKwsM2_4eT_Ra6cCOOHbQW39gcMFvR56OMT_8ubo9BLswaW1rzGW_6_tmeYri7O5QCtZ9KOrFznbocUi5DL-obYi5K3wJyta73HRfyNbgat9dfDMB3YUuPjml6IFnrnpVNLErz__V6vHWQp20HAwKXVCFB78xZ9cCLEQ9ykfcceV3czOnR3IlcL4rpiPOsjLcussxfJJl9oPcjLiVooqsu-ComJUEP2eHSQYbpMtQbdY9lr8vdVSEutfjWvvONTvREzuB0BFpaCxI27bA.jpg?r=a98',
    'https://occ-0-8018-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABem4xf7MUjuMTyYFM-CckVTnST54pJBeL8QJ-Xl5DPHdlrd83_g1q7PQAiXMOfdN0tiQMecnxMnu8K8jha8D9Y219K9g77-SYze3_CXcsyi5-JpE1i666_23vCdCiTTu24OH.jpg?r=da4',
  ];
  public imgpaths: string[] = [];
  config: any;

  // public selectedMovie: { title: string; url: string } | null = null;
  @ViewChild('bgVideo') bgVideoRef!: ElementRef<HTMLVideoElement>;
  public selectedMovie: {
    title: string;
    url: string;
    content: string;
  } | null = null;

  ngOnInit(): void {
    this.selectRandomMovie();

    const repeatCount = 3;
    this.imgpaths = Array.from({ length: repeatCount }).flatMap(
      () => this.imgpathsOriginal
    );

    this.config = this.getSwiperConfig(this.imgpaths.length);
  }

  // สุ่ม 1 รายการจาก movies[]
  selectRandomMovie() {
    const index = Math.floor(Math.random() * this.movies.length);
    this.selectedMovie = this.movies[index];
  }
  ngAfterViewInit(): void {
    // ✅ พยายามสั่งเล่นเมื่อ DOM พร้อม
    if (this.bgVideoRef?.nativeElement) {
      const video = this.bgVideoRef.nativeElement;

      // สำหรับ autoplay policies
      video.muted = true;
      video.play().catch((err) => {
        console.warn('Autoplay failed:', err);
      });
    }
  }
  getSwiperConfig(length: number) {
    const slidesPerView = 6.5;
    let slidesPerGroup = 6;

    if (length < slidesPerView * 2) {
      slidesPerGroup = 4; // ถ้าน้อยกว่า 12 → เลื่อนทีละ 4
    }

    return {
      slidesPerView,
      slidesPerGroup,
      spaceBetween: 7,
      loop: false,
      // centeredSlides: true,
    };
  }

  // public loopData(item: any[], count: number): any {
  //   let all: any[] = [];
  //   for (let i = 0; i < count; i++) {
  //     all = all.concat(item);
  //   }

  //   return all;
  // }

  // get returnAll() {
  //   return this.loopData(this.imgpaths, 8);
  // }
}
