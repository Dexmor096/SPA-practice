import React from "react";
import {useEffect, useState} from "react";
import {getAllCategory} from '../api';
import Preloader from "../components/Preloader";
import {CategoryList} from "../components/CategoryList";
import {Search} from "../components/Search";

export function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) => item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        )
    }

    useEffect(() => {
        getAllCategory().then(data => {
            setCatalog(data.categories)
            setFilteredCatalog(data.categories)
        })
     }, [])

    return (
        <>
            <Search cb={handleSearch}/>
            {!catalog.length ? <Preloader/> : <CategoryList catalog={filteredCatalog}/>}
        </>

    )
}