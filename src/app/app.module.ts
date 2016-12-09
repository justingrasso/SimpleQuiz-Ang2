import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './quiz-component/quiz.component';
import {QuestionOptions} from './question-component-mc/question.component.mc';
import {QuestionInput} from './question-component-input/question.component.input';
import {QuestionResponse} from './question-component-mr/question.component.mr';

@NgModule({
  declarations: [
    AppComponent,
    QuestionOptions,
    QuestionInput,
    QuestionResponse
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
