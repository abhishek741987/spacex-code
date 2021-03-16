import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { LaundetailsComponent } from './laundetails/laundetails.component';


const routes: Routes = [
  {
    path: '',
    component: DetailsComponent
  },
  {
    path: ':id',
    component: LaundetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
