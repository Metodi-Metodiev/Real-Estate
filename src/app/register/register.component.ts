import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
// import { RegisterService } from '../auth/authRegister/register.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // constructor(private registerServicee: RegisterService ) {}

    loginForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null)
  })
  
  onSubmit() {
    
    // const registerAuth = this.loginForm.value
    // console.log(registerAuth)
    
    // this.registerServicee.submitRegister(registerAuth).subscribe((response) => {
    //   console.log(response)
    
  }
}

