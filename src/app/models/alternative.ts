export class Alternative {
    private _enumerate: string;
    private _content: string;

    public constructor(enumarate: string, content: string) {
        this._enumerate = enumarate;
        this._content = content;
    }

    get enumerate() {
        return this._enumerate;
    }

    get content() {
        return this._content;
    }
}
