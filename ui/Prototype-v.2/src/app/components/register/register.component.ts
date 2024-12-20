import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  username: any;
  email: any;
  password: any;
  repeatPassword: any;
  registrationKey: any;

  constructor(private router: Router){}

  onSubmit(){
    this.router.navigate(['/login']);
  }

}
