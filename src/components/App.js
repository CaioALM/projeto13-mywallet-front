
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Context from "./contexts/Context";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Mainpage from "./Mainpage";
import InFlux from "./InFlux";
import OutFlux from "./OutFlux";




export default function App (){

    const [token, setToken] = useState("");
    const [userName, setUserName] = useState("");

    return(
            <BrowserRouter>
            <Context.Provider value = {{token, setToken, userName, setUserName}}>
                <Routes>
                    <Route path="/" element={<SignIn />}></Route> 
                    <Route path="/sign-up" element={<SignUp />}></Route> 
                    <Route path="/mainpage" element={<Mainpage />}></Route> 
                    <Route path="/inFlux" element={<InFlux />}></Route> 
                    <Route path="/outFlux" element={<OutFlux />}></Route> 
                    
                </Routes>
            </Context.Provider>
            </BrowserRouter>
    )
}
