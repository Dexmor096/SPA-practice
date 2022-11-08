import React, {useState} from "react";

function Search({cb= Function.prototype}) {
    const [value, setValue] = useState('');

    const handleSearch = (event) => {
        if (event.key === "Enter") {
            handleSubmit()
        }
    }
    const handleSubmit = () => {
        cb(value)
    }
    const handleClose = () => {
        setValue('')
    }
    return (
        <div className="input-field col s6">
            <i className="material-icons prefix">search</i>
            <input id="icon_prefix"
                   type="search"
                   className="validate"
                   value={value}
                   onKeyDown={handleSearch}
                   onChange={(event)=> {setValue(event.target.value)}}
            />
            <button
                className="btn"
                onClick={handleSubmit}
            >Search</button>
                <i
                    className="material-icons right"
                    onClick={handleClose}
                >close</i>
            <label htmlFor="icon_prefix">
            </label>
        </div>
    )
}

export {Search};