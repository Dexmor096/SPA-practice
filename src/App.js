import React from "react";
import {Routes, Route,} from "react-router-dom";

import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import {About} from "./pages/About"
import {Contact} from "./pages/Contact"
import {Home} from "./pages/Home"
import {NotFound} from "./pages/NotFound"

function App() {
    return (
        <>
            <Header/>
            <main className="container content">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contacts" element={<Contact/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
            <Footer/>
        </>
    );
}

export default App;
