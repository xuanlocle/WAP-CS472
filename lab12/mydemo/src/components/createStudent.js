import { useState } from 'react';
import axios from 'axios';

export default function CreateStudent(props) {
    let { onStudentCreated } = props;

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        program: '',
    });

    function handleInputChange(event) {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    }

    const handleReset = async (event) => {
        setFormData({
            id: '',
            name: '',
            program: '',
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3000/api/v1/students",
                formData
            );
            console.log(response.data);
            handleReset();
            onStudentCreated();
        } catch (error) {
            console.error("Error posting data:", error);
            alert(error)
        }
    };
    return (
        <div className="body-padding">
            <h1>Create a Student</h1>

            <form>
                {[
                    { field: "id", placeholder: "Enter student id" },
                    { field: "name", placeholder: "Enter student name" },
                    { field: "program", placeholder: "Enter student program" },
                ].map(e => <div key={e.field} className="formRow">
                    <label>{e.field}:
                        <br></br>
                        <input type="text" id={e.field}
                            value={formData[e.field]}
                            onChange={handleInputChange}
                            placeholder={e.placeholder} required></input>
                    </label>
                </div>)}

                <div className="formRow right">
                    <button className="secondary btn" type="button" onClick={handleReset}>Reset</button>
                    <button className="primary btn" type="button" onClick={handleSubmit}>Register</button>
                </div>
            </form>
        </div>
    );
}