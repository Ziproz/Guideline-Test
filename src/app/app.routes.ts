// import { Routes } from '@angular/router';

// export const routes: Routes = [];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkerListComponent } from './components/worker-list/worker-list.component';
//import { AuthGuard } from './guards/auth.guard'

const routes: Routes = [
  { path: 'organization', component: WorkerListComponent},// canActivate: [AuthGuard] },
  { path: '', redirectTo: '/organization', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }