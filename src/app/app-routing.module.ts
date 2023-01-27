import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CComponent } from './c/c.component';
import { C0Component } from './c0/c0.component';

const routes: Routes = [

  {path:'', component: CComponent, children:[
    {path:'', redirectTo:'/', pathMatch:"full"},
    {path:'abc', component: C0Component},
    {path:'one', component: C0Component},
    {path:'two', component: C0Component},
    {path:'', component: C0Component},
  ]
  },
  {path:'xyz', component: CComponent, },

  {path:"**", redirectTo:"/abc", pathMatch:"full"},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // useHash: true,
    // relativeLinkResolution: 'legacy',
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
