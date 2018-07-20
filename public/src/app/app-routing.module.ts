import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city/city.component';     // Add your component here
// import { AboutComponent } from './about/about.component';  // Add your component here

//This is my case 
const routes: Routes = [
    {
        path: ':cityId',
        component: CityComponent
    },
    {
        path: '',
        pathMatch:'full',
        redirectTo: '/5368361'
    },
    {
        path: '**',
        component: CityComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }