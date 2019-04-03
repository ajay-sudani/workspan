import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AnswersComponent implements OnInit {

  @Input() data: any;
  private months = ["Jan", "Feb", "Mar", "Apl", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  public answer: string = '';
  public invalidAnswer: boolean = false;

  constructor() {

  }

  ngOnInit() {
  }

  onAddAnswer() {
    if (this.answer) {
      this.data.answersList.push({
        'created_at': this.getDate(),
        'created_by': 'Anonymous',
        'Question-Id': this.data.Id,
        'upvotes': 0,
        'downvotes': 0,
        'Answer': this.answer
      });
      this.answer = '';
    } else {
      this.invalidAnswer = true;
    }
  }

  getDate(date = new Date()) {
    return ('0' + date.getDate()).slice(-2) + '/' + this.months[(date.getMonth() + 1)] + '/' + date.getFullYear() +
      ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
  }

}
