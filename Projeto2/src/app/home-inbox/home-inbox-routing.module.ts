import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeInboxPage } from './home-inbox.page';

const routes: Routes = [
  {
    path: '',
    component: HomeInboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeInboxPageRoutingModule {}
