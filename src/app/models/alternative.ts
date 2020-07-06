export class Alternative {
  private _enumerate: string;
  private _content: string;

  public get enumerate(): string {
    return this._enumerate;
  }

  public set enumerate(enumerate: string) {
    this._enumerate = enumerate;
  }

  public get content(): string {
    return this._content;
  }

  public set content(content: string) {
    this._content = content;
  }

  public constructor(enumarate: string, content: string) {
    this._enumerate = enumarate;
    this._content = content;
  }

  public static toJson(alternative: Alternative) {
    return {
      enumerate: alternative.enumerate,
      content: alternative.content,
    };
  }
}
