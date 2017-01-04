import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
//rxjs
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
//interface
import {IQuestion} from './interfaces/IQuestion';

@Injectable()

export class QuestionService{

  private _questionURL = "./api/quiz.json";

  constructor(private _http:Http){}

  getQuiz(): Observable<IQuestion[]>{
    return this._http.get(this._questionURL).map((response:Response) => <IQuestion[]> response.json());
  }


}
