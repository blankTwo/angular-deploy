import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { BillComponent } from './routes/bill/bill.component';

const routes: Routes = [
  {
    path: '',

    children: [
      { path: 'home', component: HomeComponent },
      { path: 'bill', component: BillComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
