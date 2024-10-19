import Student from "./student.js";
import Question from "./question.js";
import Quiz from "./quiz.js";

const student1: Student = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2: Student = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students: Student[] = [student1, student2];
const questions = [new Question(1, 'b'), new Question(2, 'a'), new
    Question(3, 'b')];
const quiz: Quiz = new Quiz(questions, students);
let scoreforStudent10: number = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11: number = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average: number = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5