import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DetectorComponent } from './components/detector/detector.component';
import { NeporiadokComponent } from './components/neporiadok/neporiadok.component';
import { RegistrationKeysComponent } from './components/registration-keys/registration-keys.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'detector', component: DetectorComponent },
    { path: 'neporiadok', component: NeporiadokComponent },
    { path: 'registration-keys', component: RegistrationKeysComponent },
    { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/login' }
];
