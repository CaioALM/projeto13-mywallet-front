
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Context from "./contexts/Context.js";

import SignIn from "../SignIn.js";
import SignUp from "../SignUp.js";
import Mainpage from "../Mainpage.js";


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
                    
                </Routes>
            </Context.Provider>
            </BrowserRouter>
    )
}
