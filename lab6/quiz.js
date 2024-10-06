export default function Quiz(questions, students) {
    this.questions = new Map(questions.map((question) => [question.qId, question.answer]));
    this.students = students;
}

Quiz.prototype.scoreStudentBySid = function (sId) {
    let studentChecking = this.students.find((student) => student.studentId === sId);
    return studentChecking.answers.reduce((res, answer) => { return res + answer.checkAnswer(this.questions.get(answer.qId)) }, 0)
}

Quiz.prototype.getAverageScore = function () {
    let sumScore = this.students.reduce((sum, student) => { return sum + this.scoreStudentBySid(student.studentId) }, 0);
    return sumScore / this.students.length;
}
