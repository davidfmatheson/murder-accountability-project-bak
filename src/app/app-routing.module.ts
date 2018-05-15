import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { IntroductionComponent } from './introduction/introduction.component';
import { HomeComponent } from './home/home.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'introduction',  component: IntroductionComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
