import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeInboxPageRoutingModule } from './home-inbox-routing.module';

import { HomeInboxPage } from './home-inbox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeInboxPageRoutingModule
  ],
  declarations: [HomeInboxPage]
})
export class HomeInboxPageModule {}
