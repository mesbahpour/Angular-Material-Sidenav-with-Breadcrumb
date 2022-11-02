import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { CustomerComponent } from './components/customer/customer.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { breadcrumb: '' } },
  {
    path: 'customer',
    component: CustomerComponent,
    data: { breadcrumb: 'customer' },
  },
  {
    path: 'suit',
    children: [
      {
        path: 'category',
        component: CategoryComponent,
        data: { breadcrumb: 'Category', parent: 'Suit' }
      },
      {
        path: 'sub-category',
        component: CategoryComponent,
        data: { breadcrumb: 'Sub Category', parent: 'Suit' }
      },
      {
        path: 'product',
        component: CategoryComponent,
        data: { breadcrumb: 'Product', parent: 'Suit' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
