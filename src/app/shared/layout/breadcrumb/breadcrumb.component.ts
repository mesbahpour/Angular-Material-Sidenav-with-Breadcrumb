import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET, NavigationStart, NavigationCancel } from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { Breadcrumb } from './breadcrumb.model';
import { BreadcrumbService } from './breadcrumb.service';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadCrumbComponent {

breadcrumbs!: Breadcrumb[]
constructor(private breadcrumbService: BreadcrumbService) {
  this.breadcrumbService.breadcrumbChanged.subscribe((crumbs: Breadcrumb[]) => {
    this.onBreadcrumbChange(crumbs);
  })
}

private onBreadcrumbChange(crumbs: Breadcrumb[]) {
  this.breadcrumbs = crumbs;
}

}
