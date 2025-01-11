import { Routes } from '@angular/router';
import { ProductsViewComponent } from './products-view.component';

export enum PRODUCT_ROUTER_TOKENS {
  DETAIL = 'detail',
  CUSTOMIZE = 'customize',
}

export const PRODUCT_ROUTES: Routes = [
  {
    path: '',
    component: ProductsViewComponent,
    children: [
      {
        path: PRODUCT_ROUTER_TOKENS.DETAIL,
        loadComponent: () =>
          import('./detail-view/detail-view.component').then(
            (m) => m.DetailViewComponent,
          ),
      },
      {
        path: PRODUCT_ROUTER_TOKENS.CUSTOMIZE,
        loadComponent: () =>
          import('./customize-view/customize-view.component').then(
            (m) => m.CustomizeViewComponent,
          ),
      },
    ],
  },
];
