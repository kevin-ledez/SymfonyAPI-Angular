import { Component } from '@angular/core';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private registerService: RegisterService) {}

  email!: string;
  password!: string;
  role!: string;

  errors: any = [];

  saveUser() {

    var inputData = {
      email: this.email,
      password: this.password,
      role: this.role
    }

    this.registerService.saveUser(inputData).subscribe({
      next: (res: any) => {
        console.log(res, 'response');
      },
      error: (err: any) => {
        console.log(err.error.errors, 'errors');
      }
    });

  }

}
