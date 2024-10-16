import Student from "../models/student.js"

const studentController = {
    getAllStudents: (req, res, next) => {
        //check query
        if (Object.keys(req.query).length === 0) {
            return res.status(200).json(Student.getAllStudents());
        }
        next();
    },
    getStudentsByQuerystring: (req, res, next) => {
        const { sort, order = 'asc', program } = req.query;
        if (order.length > 0 && order !== 'asc' && order !== 'desc') {
            return res.status(400).json({ message: "Wrong order type" });
        }

        let students;
        if (program) {
            students = Student.filterProgram(program);
        } else {
            students = Student.getAllStudents();
        }

        if (sort) {
            const orderType = order === 'asc' ? 1 : -1;
            students.sort((o1, o2) => {
                if (typeof o1[sort] === 'number') {
                    return orderType * (o1[sort] - o2[sort])
                } else {
                    return orderType * o1[sort].localeCompare(o2[sort]);
                }
            });
        }
        return res.status(200).json(students);
        // return res.status(200).json(students);
        // else res.status(200).json(Student.getAll());
    },
    getStudentById: (req, res, next) => {
        const id = req.params.id;
        if (id) {
            const student = Student.getStudentById(id * 1);
            if (student) {
                return res.status(200).json(student);
            } else {
                next(Error('NOT Found'));
                // return res.status(404).json({ message: "Not found" });
            }
        } else {
            return res.status(400).json({ message: "wrong id" });
        }
    },

    createStudent: (req, res, next) => {
        const { id, name, program } = req.body;
        if (id && name && program) {
            const student = new Student(id, name, program);
            if (student.createIfNotExist())
                res.status(201).json({ message: "created" })
            else
                res.status(409).json({ message: "student is already existed" })
        }
        else {
            res.status(400).json({ message: "provide all information" })
        }
    },
    deleteStudentById: (req, res, next) => {
        const id = req.params.id;
        if (id) {
            if (Student.deleteById(id))
                res.status(200).json({ message: "student deleted" });
            else {
                next(Error('NOT Found'));
                // res.status(404).json({ message: "student not found" });

            }
        }
        else res.status(400).json({ message: "provide all information" })
    },
    updateStudentById: (req, res, next) => {
        const id = req.params.id;
        const { name, program } = req.body;
        if (id) {
            //check student exists
            const student = Student.getStudentById(id * 1);
            if (student === undefined) {
                next(Error('NOT Found'));
                // return res.status(404).json({ message: "Student not found" });
                return;
            }

            if (name || program) {
                //create a new student instance with existing data
                const studentUpdate = new Student(student.id, student.name, student.program)

                //compare and update
                if (studentUpdate.compareAndUpdate(name, program))
                    res.status(201).json({ message: "updated" })
                else
                    res.status(409).json({ message: "student cannot be updated" })
            }
            else {
                res.status(400).json({ message: "provide some information to update" })
            }
        } else {
            next(new Error('"provide id information"'))
            // res.status(400).json({ message: "provide id information" })
        }
    },
};


export default studentController;