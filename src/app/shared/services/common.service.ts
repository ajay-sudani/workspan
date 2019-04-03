import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { tap, } from 'rxjs/operators';
import { FeedService } from './feed.service';

@Injectable({
    providedIn: 'root'
})

export class CommonService {

    public onGetData: EventEmitter<any> = new EventEmitter();
    public questionsList = [];

    constructor(
        private http: HttpClient,
        private feedService: FeedService
    ) {

    }

    // TO get all questions and answers data
    getData() {
        forkJoin(
            this.feedService.getAllQuestions(),
            this.feedService.getAllAnswers(),
        ).pipe(
            tap(([
                questions,
                answers,
            ]) => {
                if (questions['feed_questions']) {
                    this.manipulateData(questions['feed_questions'], answers['feed_answers']);
                }
            })
        ).subscribe();
    }

    manipulateData(questions, answers) {
        this.questionsList = [];
        questions.sort(this.sortByCreatedAt);
        questions.forEach(question => {
            question.upvotes = question.upvotes ? question.upvotes : 0;
            question.downvotes = question.downvotes ? question.downvotes : 0;
            question.answersList = answers && answers.filter(answer => answer['Question-Id'] === question.Id).sort(this.sortByCreatedAt);
            this.questionsList.push(question);
        });
        this.onGetData.next(this.questionsList);
    }

    sortByCreatedAt(a, b) {
        a = new Date(a.created_at).valueOf();
        b = new Date(b.created_at).valueOf();
        if (a < b)
            return 1;
        if (a > b)
            return -1;
        return 0;
    }

}