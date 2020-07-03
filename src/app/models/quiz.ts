import { Question } from './question';

export class Quiz{

  private _id: string;
  private _idTeacher: string;
  private _date: string;
  private _idCourse: string;
  private _questions: Question[];

  constructor(id: string, idTeacher: string, date: string, idCourse: string,
              questions: Question[]) {
                this._id = id;
                this._idTeacher = idTeacher;
                this._date = date;
                this._idCourse = idCourse;
                this._questions = questions;
  }

  get id(){
    return this._id;
  }

  get idTeacher(){
    return this._idTeacher;
  }

  get idCourse(){
    return this._idCourse;
  }

  get date(){
    return this._date;
  }

  get questions(){
    return this.questions;
  }


}