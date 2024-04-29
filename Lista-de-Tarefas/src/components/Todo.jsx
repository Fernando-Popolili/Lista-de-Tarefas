import React from 'react'

const Todo = ({todo}) => {
  return (
    <div className="todo">
        <div className="content">
            <p>{todo.text}</p>
            <p className="categoria">({todo.categoria})</p>
        </div>
        <div>
            <button>Completar</button>
            <button>X</button>
        </div>
    </div>
  )
}

export default Todo