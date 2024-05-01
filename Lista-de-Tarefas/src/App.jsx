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

  ]);

  //Fuunção para adiconar novos itens na lista
  const addTodo = (text, categoria) => {
    const newTodo = [...todos, {
      id:Math.floor(Math.random() * 1000), text, categoria, completo:false,
    }];
    //Substitui os dados antigos do array pelo novo array(newTodo)
    setTodos(newTodo)
  };


  //Função para adicionar no botao remover
  const funcaoRemover = (id) =>{
    const newTodos = [...todos]
    //aqueles diferentes do id informado retornará a lista e o outro será excluido
    const filterTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
    setTodos(filterTodos)
  }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {/* Percorrer o ARRAY USANDO O MAP*/}
        {todos.map((todo)=>(
          // PUXANDO O COMPONENT TODO.JSX
          <Todo key={todo.id} todo={todo} funcaoRemover = {funcaoRemover} />
          
         
        ))}
      </div>
          {/* PUXANDO O COMPONENTE DO FORMULARIO */}
      <TodoForm addTodo={addTodo}/>
    </div>
  );
};

export default App
