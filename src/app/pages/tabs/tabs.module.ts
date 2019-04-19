import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import {AuthGuardService} from '../../services/auth-route-guard';
import {ListModule} from '../list/list.module';
import {HomePageModule} from '../home/home.module';
import {ContactPageModule} from '../contact/contact.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    ListModule,
    ContactPageModule
  ],
  declarations: [TabsPage],
  providers: [AuthGuardService]
})
export class TabsPageModule {}
