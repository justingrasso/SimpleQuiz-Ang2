import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector:"qo-response",
  templateUrl:"./question.component.mr.html",
  styleUrls:["./question.component.mr.scss"]
})

export class QuestionResponse{
  @Input() questionId:number;
  @Input() qResponses:any;

  @Output() providedAnswer = new EventEmitter();

  checkedList:Array<string> = [];
  checkValueString:string;
  isDisabled:boolean = true;


  toggleCheckbox = ($event) => {
   this.checkValueString = $event.target.defaultValue;
   if($event.target.checked == true){
      this.checkedList.push(this.checkValueString);
   }else{
      let currValueIndex = this.checkedList.indexOf(this.checkValueString);
      this.checkedList.splice(currValueIndex, 1);
   }
   this.isChecked();
 }
 isChecked = () => {
   if(this.checkedList.length > 1){
     return this.isDisabled = false;
   }else{
return this.isDisabled = true;
   }
 }

  onSubmitAnswer = () => {
    this.providedAnswer.emit(this.checkedList);
  }
}
