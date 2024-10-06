export default function Question(qId, answer) {
    this.qId = qId;
    this.answer = answer;
}

Question.prototype.checkAnswer = function (answer) {
    return this.answer === answer;
}