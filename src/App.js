import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import MainNav from "./Components/MainNav/MainNav";
import Profile from "./Components/DifferrentContent/Profile/Profile";
import AdditNav from "./Components/AdditNav/AdditNav";
import Messages from "./Components/DifferrentContent/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <div className="different_content">
                    <MainNav/>
                    <div className="main_content">
                        <Route path="/profile" component={Profile}/>
                        <Route path="/messages" component={Messages}/>
                    </div>
                    <AdditNav/>
                </div>
                {/*<Footer/>*/}
            </div>
        </BrowserRouter>
    );
}
//  ctrl+А затем ctrl+alt+L  - выравнивание
// alt + Enter  - импорт модуля из какого-то места
export default App;
