import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { SiderbarComponent } from './components/siderbar/siderbar.component';
import { ConsultaComponent } from './components/consulta/consulta.component';

const routes: Routes = [

  { path: 'home', component: DashBoardComponent },
  { path: 'menu', component: SiderbarComponent },
  { path: 'consulta', component: ConsultaComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
