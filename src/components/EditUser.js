import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateUser() {
    
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);


    const {id} = useParams();
    useEffect(() => {
        getUser();
        document.title = "CRUD in React with PHP API";
    }, []);

    function getUser() {
        axios.get(`http://localhost:80/api/user/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        // Gebruiker kan geen lege inputvelden hebben
        event.preventDefault();
        // Ajax POST call
        axios.put(`http://localhost:80/api/user/${id}/edit`, inputs).then(function(response){
        // Log de json in de console
        console.log(response.data);
        navigate('/');
        });
        
    }

    return (
        <div class="container">
            <h1>Wijzig een gebruiker</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <label>Naam: </label>
                            </th>
                            <td>
                                <input value={inputs.name} type="text" name="name" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Email:</label>
                            </th>
                            <td>
                                <input value={inputs.email} type="text" name="email" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Telefoon: </label>
                            </th>
                            <td>
                                <input value={inputs.mobile} type="text" name="mobile" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>
                                <button id="saveForm">Opslaan</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}