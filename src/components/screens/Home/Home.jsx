import React, { useState } from "react";
import { FcTodoList } from "react-icons/fc";
import Item from "./UI/Item/Item";
import "./Home.css";
import ItemCreate from "./UI/ItemCreate/ItemCreate";

function Home() {
  let data = [
    {
      id: 1,
      title: "Сделать проект",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Создать пост",
      isCompleted: false,
    },
  ];

  const [todos, setTodos] = useState(data);

  function changeTodo(id) {
    const copy = [...todos];
    const current = copy.find((t) => t.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  }

  function deleteTodo(id){
    setTodos([...todos].filter(t => t.id !== id))
  }


  function createTask(title){

    const newTask ={
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      title: title,
      isCompleted:false
    }

    setTodos([...data,newTask])
  }

  return (
    <div className="container">
      <h1 className="home__title">
        <FcTodoList />
        <span className="home__title-blue">to</span>
        <span className="home__title-purple">do</span>
      </h1>
      <ItemCreate createTask={createTask}/>
      {todos.map((todo) => (
        <Item todo={todo} key={todo.id} changeTodo={changeTodo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default Home;
