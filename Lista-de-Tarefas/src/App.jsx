import './App.css'
import { useState } from "react";
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

function App() {
  // SETTODOS = INSERIR OS DADOS
    const [todos, setTodos] = useState([
    {
      id: 1,
      text:"Criar funcionalidade X no Sistema",
      categoria: "Trabalho",
      completo: false,
    },
    {
      id: 2,
      text:"Ir para a academia",
      categoria: "Pessoal",
      completo: false,
    },

  ])

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {/* Percorrer o ARRAY USANDO O MAP*/}
        {todos.map((todo)=>(
          // PUXANDO O COMPONENT TODO.JSX
          <Todo todo={todo} />
          
         
        ))}
      </div>

      <TodoForm/>
    </div>
  );
};

export default App
