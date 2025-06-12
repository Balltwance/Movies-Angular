import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    SubHeaderComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  public showSubHeader = true;
  public changeHeader = false;
  public headerStyle: 'home' | 'tv' | 'default' = 'default';
  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const current = this.getCurrentRoute(this.route);
        const path = this.router.url;
        if (path === '/home') {
          this.headerStyle = 'home';
        } else if (path === '/tv-program') {
          this.headerStyle = 'tv';
        } else {
          this.headerStyle = 'default';
        }

        this.showSubHeader = !current.snapshot.data['hideSubHeader'];
      });
  }

  private getCurrentRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
