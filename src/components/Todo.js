import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Todo({ task, toggleComplete, deleteTodo, editTodo }) {

    function handleToggleTodo() {
        toggleComplete(task.id);
    }

    function handleDelete() {
        deleteTodo(task.id);
    }

    function handleEditTodo() {
        editTodo(task.id);
    }

    const cursorPointer = {
        cursor: 'pointer'
    };

    return (
        <div className='Todo'>
            <p onClick={handleToggleTodo} className={`${task.completed ? 'completed' : ''}`} style={cursorPointer}>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={handleEditTodo} style={cursorPointer} />
                <FontAwesomeIcon icon={faTrash} onClick={handleDelete} style={cursorPointer} />
            </div>
        </div>
    )
}
