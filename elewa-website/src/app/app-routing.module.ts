import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestComponent } from './invest/invest.component';
import { SocialComponent } from './social/social.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'invest', component:InvestComponent},
  {path:'',component:SocialComponent},
  {path:'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [InvestComponent, SocialComponent, AboutComponent]
