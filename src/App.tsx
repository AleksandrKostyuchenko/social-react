import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Dialog} from "./components/Dialogs/Dialog";


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/dialog' element={<Dialog/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                    </Routes>

                </div>



            </div>
        </BrowserRouter>
    );
}

export default App;
