import React from 'react';
import style from "./Button.module.css"
import { IoMdAddCircleOutline } from "react-icons/io";


function Button({buttonClick}) {

    

    return (
        <button type='button' className={style.button} onClick={buttonClick}>
            Add <IoMdAddCircleOutline size={16}/>
        </button>
    );
};

export default Button;