import { useState } from 'react'


function TodoForm({addTodo}) {
    const [value, setValue] = useState("");
    const [categoria, setCategoria] = useState("");
    
    
    // Função para ser executado quando o botao for apartado
    const handleSubmit = (evento) =>{
        evento.preventDefault();
        //Verificação se os campos não estão em branco
        if (!value || !categoria) return;

        //Adiconando os valores que foram colocados em value e categoria na lista através da função addTodo
        addTodo(value, categoria);

        //Limapando os campos
        setValue("");
        setCategoria("");
        
    }
    

  return (
    <div className='todo-form'> 
        <h2>Criar tarefa:</h2>
        <form onSubmit={handleSubmit}>
            {/* onChange = arrow function para capturar o que estiver dentro do campo na hora do submit */}
            <input type="text" placeholder='Digite o titulo' value = {value} onChange={(evento) => setValue(evento.target.value)}/>
            <select value = {categoria} onChange={(evento) => setCategoria(evento.target.value)}> 
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type='submit'> Criar Tarefas</button>
        </form>
    </div>
  )
}

export default TodoForm