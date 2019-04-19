import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { ListPage } from '../list/list.page';
import { AuthGuardService } from '../../services/auth-route-guard';
import {HomePage} from '../home/home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'list',
        children: [
          {
            path: '',
            // loadChildren: '../../pages/list/list.module#ListPageModule'
            loadChildren: '../../pages/list/list.module#ListModule'
          }
        ]
      },
      // {
      //   path: 'list',
      //   outlet: 'list',
      //   component: ListPage,
      //   canActivate: [AuthGuardService]
      // },
      //
      //
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
