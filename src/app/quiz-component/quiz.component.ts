import { Component,OnInit,trigger, state, animate, transition, style} from '@angular/core';
import {IQuestion} from '../interfaces/IQuestion';


@Component({
  selector: 'app-root',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  animations:[
    trigger('ciIndicator',[
        transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)',left: '100%',opacity:'1' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)',left: '0',opacity:'0' }))
      ])
    ])
  ]
})
export class AppComponent {
  question: IQuestion[] = [
     {
	id: 1,
  questionType:1,
  questionText: "How many sides does a square have?",
	questionAnswer: "four",
	questionOptions: [{option:"three"},{option:"four"},{option:"one"},{option:"five"}]
}, {
	id: 2,
  questionType:3,
	questionText: "How many sides does a circle have?",
	questionAnswer: ["0","zero"],
	questionOptions: [{option:"0"},{option:"three"},{option:"two"},{option:"zero"}]
}, {
	id: 3,
  questionType:2,
	questionText: "How many sides does a triangle have?",
	questionAnswer: 3,
	questionOptions: []
}
];
  quizTitle = "Quiz!";
  currentIndex:number = 0;
  currentQuestion = this.question[this.currentIndex];
  questionCount:number = this.question.length;
  isCorrect:boolean = true;
  isAnswered:boolean = false;


  backQuestion = () => {
    this.currentIndex--;
    this.currentQuestion = this.question[this.currentIndex];
    this.isAnswered = false;
  }
  nextQuestion = () => {
    this.currentIndex++;
    this.currentQuestion = this.question[this.currentIndex];
    this.isAnswered = false;
  }

  providedAnswer = ($event) => {
    if(this.currentQuestion.questionType != 3){
    if($event == this.currentQuestion.questionAnswer){
      console.log("correct");
      this.isCorrect = true;

    }else{
      console.log("incorrect");
      this.isCorrect = false;
    }
    }else{
    if($event.sort().join() == this.currentQuestion.questionAnswer.sort().join() && this.currentQuestion.questionType == 3){
      console.log("correct");
      this.isCorrect = true;
    }else{
      console.log("incorrect");
      this.isCorrect = false;
    }
    }
    this.isAnswered = true;
  }
}
