export default class Question {
    #qId;
    #answer; //hold quiz correct answer or student's answer. It is string type

    constructor(qId, answer) {
        this.qId = qId;
        this.answer = answer;
    }

    get qId() {
        return this.#qId;
    }

    set qId(value) {
        this.#qId = value;
    }

    get answer() {
        return this.#answer;
    }

    set answer(value) {
        this.#answer = value;
    }

    checkAnswer(answer) {
        return this.answer === answer;
    }
}