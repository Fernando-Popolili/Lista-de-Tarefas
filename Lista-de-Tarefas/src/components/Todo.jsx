import React from 'react'

const Todo = ({todo, funcaoRemover, completarAtividade}) => {
  return (
    <div className="todo" style={{textDecoration: todo.completo ? "line-through" : ""}}>
        <div className="content">
            <p>{todo.text}</p>
            <p className="categoria">({todo.categoria})</p>
            
        </div>
        <div>
            <button className='BTNcompletar' onClick={()=> completarAtividade(todo.id)}>Completar</button>
            <button className='BTNexcluir' onClick={()=> funcaoRemover(todo.id)}>X</button>
            
        </div>
    </div>
  )
}

export default Todo