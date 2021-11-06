import React, { useState } from 'react';
import Todo from './todo';

const Form = () => {

    const [todo, setTodo] = useState({})
    const [todos, setTodos] = useState({
        list: [
            {todo: 'Manzanas', cantidad: 2},
            {todo: 'Gaseosas', cantidad: 3},
            {todo: 'Detergente', cantidad: 4}
        ]
    })

    const handleChange = e => setTodo({ ...todo, [e.target.name]: e.target.value })
    const handleChangeCantidad = e => setTodo({ ...todo, [e.target.name]: e.target.value })
    const handleClick = e => {
        if(Object.keys(todo).length === 0 || todo.todo.trim() === '')
        {
            alert('El campo no puede estar vacio');
            return
        }

        todos.list.push(todo)

        setTodos({
            ...todos
        })
    }

    const deleteTodo = (indice) => {
        const newTodos = { ...todos }
        newTodos.list.splice(indice, 1)
        setTodos(newTodos)
    }

    return(
        <>
        <form onSubmit={ e => e.preventDefault() }>
            <label>Agregar tarea</label> <br />
            <input type="text" name='todo' onChange={ handleChange } />
            <input type="number" name="cantidad" onChange = { handleChangeCantidad } />
            <button onClick={ handleClick }>Agregar</button>
        </form>
            {
                todos.list.map( (value, index) => (<Todo key={ index } todo={ value } index={ index } deleteTodo={ deleteTodo }/>) )
            }
        </>
    )
}

export default Form