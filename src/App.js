import React from "react";
import {Routes, Route,} from "react-router-dom";

import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import {Recipe} from "./pages/Recipe"
import {Category} from "./pages/Category"
import {Home} from "./pages/Home"
import {NotFound} from "./pages/NotFound"

function App() {
    return (
        <>
            <Header/>
            <main className="container content">
                <Routes>
                    <Route path="/SPA-practice" element={<Home />}/>
                    <Route path="/recipe/:idMeal" element={<Recipe />}/>
                    <Route path="/category/:name" element={<Category />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </main>
            <Footer/>
        </>
    );
}

export default App;
