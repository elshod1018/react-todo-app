import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

export default function TodoWrapper() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedTodos && storedTodos.length > 0) {
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    const addTodo = (taskName) => {
        const newTodo = { id: uuidv4(), task: taskName, completed: false, isEditing: false };
        setTodos(prevTodos => [...prevTodos, newTodo]);
    }

    const toggleComplete = (id) => {
        const newTodos = [...todos];
        const togglingTodo = newTodos.find(el => el.id === id);
        togglingTodo.completed = !togglingTodo.completed;
        setTodos(newTodos);
    }

    const deleteTodo = (id) => {
        const newTodos = todos.filter(el => el.id !== id);
        setTodos(newTodos);
    }

    const editTodo = (id) => {
        const newTodos = [...todos];
        const editingTodo = newTodos.find(el => el.id === id);
        editingTodo.isEditing = !editingTodo.isEditing;
        setTodos(newTodos);
    }

    const editTask = (task, id) => {
        const newTodos = [...todos];
        const editingTodo = newTodos.find(el => el.id === id);
        editingTodo.task = task;
        editingTodo.isEditing = !editingTodo.isEditing;
        setTodos(newTodos);
    }

    return (
        <div className='TodoWrapper'>
            <h1>Get things done !</h1>
            <TodoForm addTodo={addTodo} />
            {
                todos.map((el, index) => (
                    el.isEditing ? (
                        <EditTodoForm task={el}
                            key={index}
                            editTodo={editTask} />
                    ) : (
                        <Todo task={el}
                            key={index}
                            toggleComplete={toggleComplete}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}
                        />
                    )
                ))
            }
        </div>
    )
}
