import { Question } from "./question";

export class Quiz {
  private _id: string;
  private _idTeacher: string;
  private _date: string;
  private _idCourse: string;
  private _questions: Question[];

  public get id(): string {
    return this._id;
  }

  public set id(id: string) {
    this._id = id;
  }

  public get idTeacher(): string {
    return this._idTeacher;
  }

  public set idTeacher(idTeacher: string) {
    this._idTeacher = idTeacher;
  }

  public get date(): string {
    return this._date;
  }

  public set date(date: string) {
    this._date = date;
  }

  public get idCourse(): string {
    return this._idCourse;
  }

  public set idCourse(idCourse: string) {
    this._idCourse = idCourse;
  }

  public get questions(): Question[] {
    return this._questions;
  }

  public set questions(questions: Question[]) {
    this._questions = questions;
  }

  constructor(
    id: string,
    idTeacher: string,
    date: string,
    idCourse: string,
    questions: Question[]
  ) {
    this._id = id;
    this._idTeacher = idTeacher;
    this._date = date;
    this._idCourse = idCourse;
    this._questions = questions;
  }
}
