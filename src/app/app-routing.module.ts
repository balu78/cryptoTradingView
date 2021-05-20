import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradingviewComponent } from './tradingview/tradingview.component'

const routes: Routes = [
  { path: 'trade', component: TradingviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
