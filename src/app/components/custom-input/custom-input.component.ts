import { Component, signal, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import{MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-custom-input',
  imports: [CommonModule, MatIconModule, MatFormFieldModule, MatInputModule,],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss',
})
export class CustomInputComponent {
   @Input() label: string = '';
  @Input() labelClass: string = '';
  @Input() type: string = 'text';

  public isFocused = signal(false);
}
