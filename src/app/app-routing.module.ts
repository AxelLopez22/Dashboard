import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckAuthGuard } from './admin/auth/guards/check-auth.guard';
import { LoginGuardGuard } from './admin/auth/guards/login-guard.guard';

const routes: Routes = [
  {path:'', redirectTo:'dashboard/admin', pathMatch:'full'},
  {path:'dashboard/admin', loadChildren: () => import('../app/admin/admin-panel.module').then(x => x.AdminPanelModule), canActivate: [CheckAuthGuard]},
  {path: 'dashboard/auth', loadChildren: () => import('../app/admin/auth/auth.module').then(x => x.AuthModule),  canActivate: [LoginGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
