import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-sig-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sig-in.component.html',
  styleUrls: ['./sig-in.component.css']
})
export class SigInComponent{
  title = "reactive form"
  
  loginForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null)
  })

 

  onSubmit() {
    console.warn(this.loginForm.value)
  }
}
