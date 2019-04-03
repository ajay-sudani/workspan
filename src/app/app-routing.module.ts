import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { DetailsQuestionComponent } from './detail-question/detail-question.component';

const routes: Routes = [
  { path: 'feed', component: FeedComponent },
  { path: 'feed/:id', component: DetailsQuestionComponent },
  { path: '', redirectTo: '/feed', pathMatch: 'full' },
  { path: '**', redirectTo: '/feed', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
