import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  template: `
    <h1>HomeComponent!</h1>

    <ul>
      <li *ngFor="let blogLink of blogLinks$ | async">
        <a [routerLink]="blogLink.route">
          {{ blogLink?.sampleMetadataTextField }}
          <span *ngFor="let item of blogLink?.sampleMetadataArrayField">
          {{ item }}
          </span>
        </a>
      </li>
    </ul>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public readonly blogLinks$: Observable<ScullyRoute[]> = this.blogRouteService.available$;

  private _destroy$ = new Subject<void>();

  constructor(private blogRouteService: ScullyRoutesService) {}

  ngOnInit() {
    // debug current pages.
    // this.links$.pipe(takeUntil(this._destroy$)).subscribe((links) => {
    //   console.log(links);
    // });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
