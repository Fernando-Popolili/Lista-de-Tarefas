import './App.css';
import { useState, useEffect } from "react";

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Busca from './components/Busca';

function App() {
  // Carregar dados do localStorage na inicialização
  const [todos, setTodos] = useState(() => {

    //Busca a string "todos" no localStorage.
    //Se encontrado, converte a string JSON em um objeto JavaScript.
    //Se não encontrado, inicializa todos com um array de objetos de exemplo.
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [
      {
        id: 1,
        text: "Exemplo",
        categoria: "Exemplo",
        completo: false,
      }
      
    ];
  });

  const [busca, setBusca] = useState("");

  // Função para adicionar novos itens na lista
  const addTodo = (text, categoria) => {
    const newTodo = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        categoria,
        completo: false,
      },
    ];
    // Atualiza a lista
    setTodos(newTodo);
    // Atualiza o localStorage
    localStorage.setItem("todos", JSON.stringify(newTodo));
  };

  // Função para remover um item da lista
  const funcaoRemover = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    // Atualizando a lista
    setTodos(newTodos);
    // Atualiza o localStorage
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  // Função para completar atividades
  const completarAtividade = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completo: !todo.completo } : todo
    );
    setTodos(newTodos);
    // Atualiza o localStorage
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Busca busca={busca} setBusca={setBusca} />
      <div className="todo-list">
        {todos
          .filter((todo) =>
            todo.text.toLowerCase().includes(busca.toLowerCase())
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              funcaoRemover={funcaoRemover}
              completarAtividade={completarAtividade}
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
