import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from "../Input/Input";
import style from "./ItemCreate.module.css"

function ItemCreate({createTask}) {

    const [text, setText] = useState("")

    function inputChange (newText){
        setText(newText)
    }

    function buttonClick(){
        if(text.trim()){
            createTask(text)
            setText("")
        }
    }

    return (
        <div className={style.itemCreate}>
            <Input inputChange={inputChange} text={text}/>
            <Button buttonClick={buttonClick} />
        </div>
    );
};

export default ItemCreate;