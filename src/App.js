import React from 'react';
// import ReactDOM from 'react-dom/client';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
      <h5>CRUD in React with PHP API</h5>

      <BrowserRouter>

      <nav>
        <ul>
          <li>
            <Link to="/">Lijst van gebruikers</Link>
          </li>
          <li>
            <Link to="user/create">Voeg een gebruiker toe</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<UserList />} />
        <Route path="user/create" element={<CreateUser />} />
        <Route path="user/:id/edit" element={<EditUser />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
