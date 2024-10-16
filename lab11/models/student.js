const students = [
    { id: 1, name: 'Le', program: "MBA" },
    { id: 2, name: 'Xuan', program: "COMPRO" },
    { id: 3, name: 'Loc', program: "MBA" },
    { id: 4, name: 'Lee', program: "COMPRO" },
]


export default class Student {
    constructor(id, name, program) {
        this.id = id;
        this.name = name;
        this.program = program;
    }

    createIfNotExist() {
        let student = students.find(e => e.id == this.id)
        if (!student) {
            students.push(this)
            return this;
        }
    }

    compareAndUpdate(name, program) {
        let studentIndex = students.findIndex(e => e.id == this.id)
        let student = students[studentIndex];
        if (name) {
            student.name = name;
        }
        if (program) {
            student.program = program;
        }
        students[studentIndex] = student;
        return student;
    }

    static getAllStudents = () => {
        return structuredClone(students);
    }

    static getStudentById = (id) => {
        return students.find(e => e.id === id);
    }

    static filterProgram = (query) => {
        return students.filter(e => e.program === query);
    }

    static sortBy = (field, order) => {
        return Student.getAllStudents().sort((o1, o2) => {
            if (typeof o1[field] === 'number') {
                return order * (o1[field] - o2[field])
            } else {
                return order * o1[field].localeCompare(o2[field]);
            }
        });
    }

    static deleteById(id) {
        const indexOfStudent = students.findIndex(e => e.id == id);
        if (indexOfStudent !== -1) {
            return students.splice(indexOfStudent, 1)[0];
        }
    }


}