import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { BreadCrumbComponent } from './breadcrumb/breadcrumb.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SidebarComponent, SideNavbarComponent, BreadCrumbComponent],
  exports: [SidebarComponent, SideNavbarComponent, BreadCrumbComponent],
  imports: [
    CommonModule,MaterialModule, RouterModule, HttpClientModule, HttpClientJsonpModule
  ]
})
export class sharedModule { }
