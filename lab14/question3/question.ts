export default class Question {
    private _qId: number;
    private _answer: string; //hold quiz correct answer or student's answer. It is string type

    constructor(id: number, answer: string) {
        this._qId = id;
        this._answer = answer;
    }

    get qId(): number {
        return this._qId;
    }


    set qId(value) {
        this._qId = value;
    }

    get answer() {
        return this._answer;
    }

    set answer(value) {
        this._answer = value;
    }

    checkAnswer(answer: string): boolean {
        return this._answer === answer;
    }
}