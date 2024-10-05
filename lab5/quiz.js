export default class Quiz {
    /**
     * It's a Map which holds question id and correct answers. The key is question id, the
     * value is the correct answer for this question.
     */
    #questions;
    #students; //an array holds all students.

    constructor(questions, students) {
        this.questions = new Map(questions.map((question) => [question.qId, question.answer]));
        this.students = students;
    }

    get questions() {
        return this.#questions;
    }

    set questions(value) {
        this.#questions = value;
    }

    get students() {
        return this.#students;
    }

    set students(value) {
        this.#students = value;
    }

    scoreStudentBySid(sId) {
        // got problem with return exactly studentId but wrong answers, cause by I used `student.studentId = sId` instead `===` 
        let studentChecking = this.students.find((student) => student.studentId === sId);
        // let score = 0;
        // studentChecking.answers.forEach((studentAnswer) => {
        //     let correctAnswer = this.questions.get(studentAnswer.qId);
        //     if (studentAnswer.checkAnswer(correctAnswer)) {
        //         score++;
        //     }
        // });
        // return score;
        return studentChecking.answers.reduce((res, answer) => { return res + answer.checkAnswer(this.questions.get(answer.qId)) }, 0)
    }

    getAverageScore() {
        let sumScore = this.students.reduce((sum, student) => { return sum + this.scoreStudentBySid(student.studentId) }, 0);
        return sumScore / this.#students.length;
    }
}
