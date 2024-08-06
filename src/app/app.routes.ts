import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MasterLoginSignUpComponent } from './master-login-sign-up/master-login-sign-up.component';
import { UserChatComponent } from './components/user-chat/user-chat.component';

export const routes: Routes = [
  {
    path: '',
    component: MasterLoginSignUpComponent,
  },
  {
    path: 'main',
    component: MainPageComponent,
  },
  {
    path: 'users/:id',
    component: UserChatComponent,
    outlet: 'mainroute',
  },
];
