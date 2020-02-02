import React from "react";
import TodoItem from "./components/TodoItem";
import todosData from "./todosData";

function App() {
  let todoItems = todosData.map( item => <TodoItem key={item.id} item={item}/>);
  return(

    <div className="todo-list">
      {todoItems}
    </div>
  )
}

export default App;