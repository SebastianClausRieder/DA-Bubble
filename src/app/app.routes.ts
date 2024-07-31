import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MasterLoginSignUpComponent } from './master-login-sign-up/master-login-sign-up.component';

export const routes: Routes = [
  {
    path: '',
    component: MasterLoginSignUpComponent,
  },

  { path: 'main', component: MainPageComponent },
];
