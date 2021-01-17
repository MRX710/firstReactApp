import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import MainNav from "./Components/MainNav/MainNav";
import AdditNav from "./Components/AdditNav/AdditNav";
import Friends from "./Components/DifferrentContent/Friends/Friends";
import Groups from "./Components/DifferrentContent/Groups/Groups";
import Messages from "./Components/DifferrentContent/Messages/Messages";
import Music from "./Components/DifferrentContent/Music/Music";
import Profile from "./Components/DifferrentContent/Profile/Profile";
import Settings from "./Components/DifferrentContent/Settings/Settings";
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
                        <Route path="/news" component={Settings}/>
                        <Route path="/friends" component={Friends}/>
                        <Route path="/groups" component={Groups}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
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
