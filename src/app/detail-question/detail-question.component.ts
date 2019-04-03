import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CommonService } from '../shared';


@Component({
  selector: 'app-detail-question',
  templateUrl: './detail-question.component.html',
  styleUrls: ['./detail-question.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DetailsQuestionComponent implements OnInit, OnDestroy {

  private onGetDataSubscriber: any;
  private paramId: any;
  public question: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private commonService: CommonService) {
    // To get params list from url
    this.activatedRoute.params.subscribe(params => {
      this.paramId = params['id'];
    });
    // On get data subscriber
    this.onGetDataSubscriber = this.commonService.onGetData.subscribe(data => {
      this.question = data.find(data => data.Id === this.paramId);
    });
  }

  ngOnInit() {
    if (this.commonService.questionsList.length === 0) {
      this.commonService.getData();
    } else {
      this.question = this.commonService.questionsList.find(data => data.Id === this.paramId);
    }
  }

  ngOnDestroy() {
    // To unsubscribe all subscriber
    this.onGetDataSubscriber.unsubscribe();
  }

  // Go to main list page 
  goToListPage() {
    this.router.navigateByUrl(`/feed`);
  }
}
