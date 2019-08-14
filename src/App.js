import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route} from "react-router-dom";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header logo={logo}/>
            <Navbar/>
            <div className='app-wrapper__contet'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile' render={() => <Profile/>}/>
            </div>
        </div>
    );
}

export default App;