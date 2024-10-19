import Question from "./question";
import Student from "./student";

export default class Quiz {
    /**
     * It's a Map which holds question id and correct answers. The key is question id, the
     * value is the correct answer for this question.
     */
    private _questions: Map<number, string>;
    private _students: Student[]; //an array holds all students.

    constructor(questions: Question[], students: Student[]) {
        this._questions = new Map(questions.map((question) => [question.qId, question.answer]));
        this._students = students;
    }

    get questions(): Map<number, string> {
        return this._questions;
    }

    set questions(value: Map<number, string>) {
        this._questions = value;
    }

    get students(): Student[] {
        return this._students;
    }

    set students(value: Student[]) {
        this._students = value;
    }

    scoreStudentBySid(sId: number): number {
        let studentChecking: Student | undefined = this.students.find((student) => student.studentId === sId);
        if (studentChecking) {
            return studentChecking!.answers!.reduce((res, answer) => {
                const realAnswer: string | undefined = this.questions.get(answer.qId)
                if (typeof realAnswer === 'string') {
                    return res + (answer.checkAnswer(realAnswer) ? 1 : 0);
                } else {
                    return 0;
                }
            }, 0)
        } else {
            return 0;
        }
    }

    getAverageScore(): number {
        let sumScore: number = this.students.reduce((sum, student) => {
            return sum + this.scoreStudentBySid(student.studentId)
        }, 0);
        return sumScore / this._students.length;
    }
}
