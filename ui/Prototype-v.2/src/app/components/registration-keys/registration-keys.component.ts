import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration-keys',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration-keys.component.html',
  styleUrl: './registration-keys.component.scss'
})
export class RegistrationKeysComponent {

  constructor(private toastr: ToastrService, private router: Router) {}
  
  onSubmit() {
    this.toastr.success('Sent to e-mail', 'Key generated')
  }
}
