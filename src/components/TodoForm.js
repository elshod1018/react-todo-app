import React, { useState } from 'react'

export default function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text'
                value={value}
                className='todo-input'
                placeholder='What is todo name?'
                onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='todo-btn' >Add Todo</button>
        </form>
    )
}
