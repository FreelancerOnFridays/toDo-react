import React, { useState } from 'react';
import style from "./Input.module.css"


function Input({inputChange,text}) {
   

    return (
        <input value={text} placeholder='Start typing a new task...' className={style.input} onChange={(e) => inputChange(e.target.value)}>
            
        </input>
    );
};

export default Input;