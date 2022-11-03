import React from "react";
import {useEffect, useState} from "react";
import {getAllCategory} from '../api';
import Preloader from "../components/Preloader";
import {CategoryList} from "../components/CategoryList";

export function Home() {
    const [catalog, setCatalog] = useState([])

    useEffect(() => {
        getAllCategory().then(data => {
            setCatalog(data.categories)
        })
    }, [])

    return (
        <>
            {!catalog.length ? <Preloader/> : <CategoryList catalog={catalog}/>}
        </>

    )
}