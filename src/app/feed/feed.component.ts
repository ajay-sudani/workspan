import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../shared';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class FeedComponent implements OnInit, OnDestroy {

  private onGetDataSubscriber: any;
  public data = [];
  public answer: string = '';
  public invalidAnswer: boolean = false;

  constructor(
    private router: Router,
    private commonService: CommonService
  ) {
    // On get data subscriber
    this.onGetDataSubscriber = this.commonService.onGetData.subscribe(data => {
      this.data = data;
    });
  }

  ngOnInit() {
    this.commonService.getData();
  }

  ngOnDestroy() {
    // To unsubscribe all subscriber
    this.onGetDataSubscriber.unsubscribe();
  }

  // Go to selected question details page 
  goToDetailsPage(id) {
    this.router.navigateByUrl(`/feed/${id}`);
  }

}
