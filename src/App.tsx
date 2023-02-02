import React, { useState } from "react";

import "./App.css";
import InputTodo from "./components/InputTodo";
import TodoArea from "./components/TodoArea";
import DoneArea from "./components/DoneArea";

function App() {
  const [todoText, setTodoText] = useState("");

  const [incompleteTodos, setIncompleteTodos] = useState(["テスト", "テスト2"]);
  const [completeTodos, setCompleteTodos] = useState(["テスト3"]);

  const onChangeTodoText = (e: any) => setTodoText(e.target.value);

  const onClickAdd = () => {
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickEdit = (index: any) => {
    alert(index);
  };

  const onClickDelete = (index: any) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index: any) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  const onClickReturn = () => {
    alert();
  };

  return (
    <>
      <h1>やることリスト</h1>
      <InputTodo
        onChangeTodoText={onChangeTodoText}
        todoText={todoText}
        onClickAdd={onClickAdd}
      />
      <TodoArea
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />
      <DoneArea completeTodos={completeTodos} onClickReturn={onClickReturn} />
    </>
  );
}

export default App;
