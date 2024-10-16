// implement getAllStudents, 
// getStudentsByQuerystring(consider filter and sort if there is any query string), 
// getStudentById, createStudent, deleteStudent, and updateStudent functionality in router, controller, and model. 


import express from 'express';
import studentController from '../controllers/studentController.js';

const router = express.Router();
router.route('/')
    .get(studentController.getAllStudents)
    .get(studentController.getStudentsByQuerystring)
    .post(express.json(), studentController.createStudent);

    
router.route('/:id')
.delete(express.json(), studentController.deleteStudentById)
.put(express.json(), studentController.updateStudentById)
.get(studentController.getStudentById);



export default router