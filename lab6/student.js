"use strict"
export default function Student(studentId, answers = []) {
    this.studentId = studentId;
    this.answers = answers;
}

Student.prototype.addAnswer = function (question) {
    this.answers?.push(question);
}
