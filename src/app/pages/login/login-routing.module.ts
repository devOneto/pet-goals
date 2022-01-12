import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthPage } from './components/auth-page-component/auth-page.component';
import { RegisterPage } from './components/register-page-component/register-page.component';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
    children: [
      { path: '', component: AuthPage },
      // TODO: Rota de Registro de novas contas
      // { path: '/register', component: RegisterPage }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule { }
