import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  showMenuItems = false;
  interval: any;
  isActive = true;

  ngOnInit() {
    this.checkSessionStorage();
    this.interval = setInterval(() => {
      this.checkSessionStorage();
      this.cdr.detectChanges(); 
    }, 1000);
  }

  toggleActive(){
    this.isActive = !this.isActive;
    if(!this.isActive){
      this.router.navigate(["/detector"]);
    }else{
      this.router.navigate(["/neporiadok"]);
    }
  }

  checkSessionStorage() {
    this.showMenuItems = sessionStorage.getItem('Logged') === 'true';
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval); 
    }
  }

  moveToDetection(){
    const destinationRoute = '/detector';
    this.router.navigate([destinationRoute]);
    window.location.reload();
  }

  moveToKeys(){
    this.router.navigate(['/registration-keys']);
  }

  moveToAbout(){
    this.router.navigate(['/about']);
  }

  moveToRegister() {
    this.router.navigate(['/register']);
  }

  moveToLogin() {
    this.router.navigate(['/login']);
  }

  logout(){
    sessionStorage.setItem("Logged", "false");
    this.toast.success('Signed out successfuly')
    this.moveToLogin();
  }
  constructor(private router: Router, private toast: ToastrService, private cdr: ChangeDetectorRef, private activatedRoute: ActivatedRoute){}


}
