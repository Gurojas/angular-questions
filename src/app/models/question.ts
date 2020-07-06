import { Alternative } from "./alternative";

export class Question {
  private _id: string;
  private _content: string;
  private _correct: number;
  private _type: number;
  private _alternatives?: Alternative[];
  private _answer?: string;

  constructor(id: string, content: string, correct: number,
              type: number, alternatives?: Alternative[], answer?: string) {
      this._id = id;
      this._content = content;
      this._alternatives = alternatives;
      this._correct = correct;
      this._type = type;
      this._answer = answer;
  }

  public get id(): string {
    return this._id;
  }

  public set id(id: string) {
    this._id = id;
  }

  public get content(): string {
    return this._content;
  }

  public set content(content: string) {
    this._content = content;
  }

  public get correct(): number {
    return this._correct;
  }

  public set correct(correct: number) {
    this._correct = correct;
  }

  public get type(): number {
    return this._type;
  }

  public set type(type: number) {
    this._type = type;
  }

  public get alternatives(): Alternative[] {
    return this._alternatives;
  }

  public set alternatives(alternatives: Alternative[]) {
    this._alternatives = alternatives;
  }

  public get answer(): string {
    return this._answer;
  }

  public set answer(answer: string) {
    this._answer = answer;
  }



}
