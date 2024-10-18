import axios from 'axios';

export default function AllStudent(props) {
    let { students, onStudentDeleted } = props;

    const handleDeleteStudent = async (event) => {
        const { id } = event.target;
        event.preventDefault();
        try {
            const response = await axios.delete(
                `http://localhost:3000/api/v1/students/${id}`,
            );
            console.log(response.data);
            onStudentDeleted();
        } catch (error) {
            console.error("Error posting data:", error);
            alert(error)
        }
    };
    return (
        <div className="body-padding top-padding">
            <h1>All Students</h1>
            <hr></hr>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Program</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {students?.map(student =>
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.program}</td>
                            <td>
                                <button
                                    id={student.id}
                                    className="primary btn" type="button" onClick={handleDeleteStudent}>Delete</button>
                            </td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}