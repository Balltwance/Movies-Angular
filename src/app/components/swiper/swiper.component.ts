import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  ContentChild,
  TemplateRef,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
  OnDestroy,
  NgZone,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Subscription, take } from 'rxjs';
import { ButtonComponent } from '../button/button.component';

register();

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  host: { class: 'relative' },
})
export class SwiperComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() public classes: string | string[] = '';
  @Input() public items: any[] = [];
  @Input() public config: SwiperOptions = {};
  @ContentChild(TemplateRef) template!: TemplateRef<any>;
  @ViewChild('swiperContainer') public swiperContainer!: ElementRef;
  @ViewChild('btnNext', { static: false }) btnNext!: ElementRef;
  @ViewChild('btnPrev', { static: false }) btnPrev!: ElementRef;

  private swiper?: Swiper;
  private onStableSub?: Subscription;

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {}

  public ngAfterViewInit(): void {
    this.initSwiper();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.swiper?.slideTo(0, 0);
    if (changes['items'] && !changes['items'].firstChange) {
      this.recreateSwiperSafely();
    }

    if (changes['config'] && !changes['config'].firstChange) {
      this.recreateSwiperSafely();
    }
  }

  private initSwiper(): void {
    if (this.swiper) this.swiper.destroy(true, true);

    const mergedConfig: SwiperOptions = {
      ...this.config,
    };

    this.swiper = new Swiper(this.swiperContainer.nativeElement, mergedConfig);
  }

  private recreateSwiperSafely(): void {
    // เก็บตำแหน่งก่อน destroy
    this.swiper?.destroy(true, true);
    this.cdr.detectChanges();

    // ยกเลิก subscribe เก่า (ถ้ามี)
    this.onStableSub?.unsubscribe();

    this.ngZone.onStable.pipe(take(1)).subscribe(() => {
      this.ngZone.run(() => {
        this.initSwiper();
      });
    });
  }

  public ngOnDestroy(): void {
    this.swiper?.destroy(true, true);
    this.onStableSub?.unsubscribe();
  }

  public trackByFn(index: number, item: any) {
    return item?.id ?? index;
  }

  public slideNext(): void {
    this.swiper?.slideNext();
  }

  public slidePrev(): void {
    this.swiper?.slidePrev();
  }
}
