import React from 'react';
import TodoList from './components/TodoList';
import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);
function App() {
  return (
    <div className="App">

      <TodoList></TodoList>
    </div>
  );
}

export default App;
