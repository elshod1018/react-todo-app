import React, { useState } from 'react'

export default function EditTodoForm({ task, editTodo }) {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        editTodo(value, task.id);
        setValue('');
    }

    return (
        <form className='Edi' onSubmit={handleSubmit}>
            <input type='text'
                value={value}
                className='todo-input'
                placeholder='Update Todo'
                onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='todo-btn' >Update Todo</button>
        </form>
    )
}