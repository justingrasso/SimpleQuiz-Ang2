import { Component,OnInit,trigger, state, animate, transition, style} from '@angular/core';
import {QuestionService} from '../questionService';
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
export class AppComponent implements OnInit{

  question: IQuestion[];
  quizTitle = "Quiz!";
  currentIndex:number = 0;
  currentQuestion:any;
  questionCount:number;
  isCorrect:boolean = true;
  isAnswered:boolean = false;
  errorMessage: string;
constructor(private _questionService:QuestionService){}
  ngOnInit():void{
    this._questionService.getQuiz().subscribe(response => this.question = response,
            err => console.error(err),
    () => (this.currentQuestion = this.question[this.currentIndex],this.questionCount = this.question.length));
    this.question = new Array<IQuestion>();
  }
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
