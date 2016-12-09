import {Component,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector:'qo-input',
  templateUrl:'question.component.input.html',
  styleUrls:['question.component.input.scss']
})

export class QuestionInput{

inputValue:number;

@Input() questionId:number;

@Output() providedAnswer = new EventEmitter();

onSubmitAnswer = () => {
  this.providedAnswer.emit(this.inputValue);
}

}
