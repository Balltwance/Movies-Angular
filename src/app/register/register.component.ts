import { FooterComponent } from './../footer/footer.component';
import { Component } from '@angular/core';
import { ButtonComponent } from "../components/button/button.component";


@Component({
  selector: 'app-register',
  imports: [ButtonComponent,FooterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
