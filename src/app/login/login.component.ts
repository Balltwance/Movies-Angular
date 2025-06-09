import { CustomInputComponent } from '../components/custom-input/custom-input.component';
import { ButtonComponent } from './../components/button/button.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [CustomInputComponent, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  

}
