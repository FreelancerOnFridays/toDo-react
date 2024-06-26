import React from 'react';
import { BsTrash3 } from "react-icons/bs";
import style from "./Trash.module.css"

function Trash() {
    return (
        <button className={style.trash__button}>
            <BsTrash3 size={14} className={style.trash__icon} />
        </button>
    );
};

export default Trash;