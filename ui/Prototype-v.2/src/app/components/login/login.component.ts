import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username?: string;
  password?: string;

  constructor(private toastr: ToastrService, private router: Router) {}
  
  onLogin() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.toastr.success('Login successfull!');
      this.username = "";
      this.password = "";
      sessionStorage.setItem("Logged", "true");
      this.router.navigate(['/detector']);
    } else {
      this.toastr.error('Try admin admin', 'Credentials entered are invalid')
    }
  }
}
