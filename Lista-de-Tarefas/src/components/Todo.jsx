import React from 'react'

const Todo = ({todo, funcaoRemover}) => {
  return (
    <div className="todo">
        <div className="content">
            <p>{todo.text}</p>
            <p className="categoria">({todo.categoria})</p>
            
        </div>
        <div>
            <button className='BTNcompletar'>Completar</button>
            <button className='BTNexcluir' onClick={()=> funcaoRemover(todo.id)}>X</button>
            
        </div>
    </div>
  )
}

export default Todo