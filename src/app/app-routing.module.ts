import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViewDriverComponent } from './components/view-driver/view-driver.component';
import { ViewCabComponent } from './components/view-cab/view-cab.component';

const routes: Routes = [
  {
    path: "",
    component:HomeComponent,
    pathMatch:'full' 
  },
  {
    path:"view-drivers",
    component:ViewDriverComponent,
    pathMatch:'full'
  },
  {
    path:"view-cabs",
    component:ViewCabComponent,
    pathMatch:'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
