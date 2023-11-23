import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormGroup, FormControl, FormsModule , ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  data: string='';

form = new FormGroup({
  username : new FormControl(),
  password : new FormControl(),
  phonenumber : new FormControl(),
})

onClick(){
 // this.username.setValue("Arezoo")
  //this.password.setValue(4005221241)
  console.log(this.form.value);
}
}