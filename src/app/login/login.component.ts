import { CustomInputComponent } from '../components/custom-input/custom-input.component';
import { FooterComponent } from '../footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../components/button/button.component';

@Component({
  selector: 'app-login',
  imports: [CustomInputComponent,FooterComponent,CommonModule,ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  

}
