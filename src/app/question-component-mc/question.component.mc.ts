import {Component, Input,Output,EventEmitter} from '@angular/core';
@Component({
  selector:'qo-options',
  templateUrl:'./question.component.mc.html',
  styleUrls:['./question.component.mc.scss']
})
export class QuestionOptions{
  @Input() questionId:number;
  @Input() qOptions:any;

  @Output() providedAnswer = new EventEmitter();

  radioValue:any;

  onSubmitAnswer = () => {
    this.providedAnswer.emit(this.radioValue);
  }
}
