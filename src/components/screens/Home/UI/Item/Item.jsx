import React from "react";
import Check from "../CheckBox/Check";
import style from "./Item.module.css";
import Trash from "../Trash/Trash";

function Item({ todo, changeTodo, deleteTodo }) {
  const line = {
    textDecorationLine: todo.isCompleted ? "line-through" : "none",
    color: todo.isCompleted ? "#808080" : "#F2F2F2",
  };

  return (
      <div className={style.item}>
        <span
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => changeTodo(todo.id)}
        >
          <Check isCompleted={todo.isCompleted} />
          <span className={style.item__title} style={line}>
            {todo.title}
          </span>
        </span>
        <div onClick={() => deleteTodo(todo.id)}>
          <Trash />
        </div>
      </div>
  );
}

export default Item;
