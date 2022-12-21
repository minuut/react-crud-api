import React from 'react';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
    
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        // Gebruiker kan geen lege inputvelden hebben
        event.preventDefault();
        // Ajax POST call
        axios.post('http://localhost:80/api/user/save', inputs).then(function(response){
        // Log de json in de console
        console.log(response.data);
        navigate('/');
        });
        
    }

    return (
        <div class="container">
            <h1>Meld je aan!</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <label>Naam: </label>
                            </th>
                            <td>
                                <input type="text" name="name" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Email:</label>
                            </th>
                            <td>
                                <input type="text" name="email" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Telefoon: </label>
                            </th>
                            <td>
                                <input type="text" name="mobile" onChange={handleChange} />
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