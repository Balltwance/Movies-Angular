import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import{MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-custom-input',
  imports: [MatIconModule, MatFormFieldModule, MatInputModule, ButtonComponent],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CustomInputComponent {

}
