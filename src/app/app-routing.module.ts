import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/components/not-found/not-found.component';

const routes: Routes = [

    { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
    { path: 'not-found', component:NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
