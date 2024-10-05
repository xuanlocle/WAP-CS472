"use strict"
export default class Student {
    #studentId;
    #answers; // holds an array that records the student's answers for the questions

    constructor(studentId, answers = []) {
        this.studentId = studentId;
        this.answers = answers;
    }

    get studentId() {
        return this.#studentId;
    }

    set studentId(value) {
        this.#studentId = value;
    }

    get answers() {
        return this.#answers;
    }

    set answers(value) {
        this.#answers = value;
    }

    addAnswer(question) {
        this.answers?.push(question);
    }

}