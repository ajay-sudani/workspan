import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class QuestionComponent implements OnInit {

  @Input() data: any;
  @Input() index: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

  // To upvote question
  onUpvote(question) {
    question.upvotes = Number(question.upvotes) + 1;
  }

  // To downvote question
  onDownvote(question) {
    question.downvotes = Number(question.downvotes) + 1;
  }

}
