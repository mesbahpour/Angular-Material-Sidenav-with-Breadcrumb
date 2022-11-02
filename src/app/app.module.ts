import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { sharedModule } from './shared/layout/shared.module';
import { BreadcrumbService } from './shared/layout/breadcrumb/breadcrumb.service';
import { PagesRoutingModule } from './pages/pages-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    sharedModule,
    RouterModule,
    BrowserAnimationsModule,
    PagesRoutingModule  
  ],
  providers: [BreadcrumbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
