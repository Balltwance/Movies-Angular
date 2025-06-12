import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button/button.component';

@Component({
  selector: 'app-tv-program',
  imports: [ButtonComponent],
  templateUrl: './tv-program.component.html',
  styleUrl: './tv-program.component.scss',
})
export class TvProgramComponent {}
