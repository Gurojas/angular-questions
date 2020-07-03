import { Alternative } from './alternative';

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



}
