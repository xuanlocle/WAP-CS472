import Question from "./question";

export default class Student {
    private _studentId: number;
    private _answers: Question[]; // holds an array that records the student's answers for the questions

    constructor(studentId: number, answers = []) {
        this._studentId = studentId;
        this._answers = answers;
    }

    get studentId(): number {
        return this._studentId;
    }

    set studentId(value: number) {
        this._studentId = value;
    }

    get answers(): Question[] {
        return this._answers;
    }

    set answers(value: Question[]) {
        this._answers = value;
    }

    addAnswer(question: Question) {
        this._answers?.push(question);
    }

}