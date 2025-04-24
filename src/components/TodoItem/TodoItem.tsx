import React from 'react'
import s from './todoItem.module.css'
import { useDispatch } from 'react-redux'
import { toggleCompletedTodo, removeTodo } from '../../features/todo/todoSlice'

const TodoItem = ({ value }) => {

    const dispatch = useDispatch();

    const toggleTodoHandler = (id) => {
        dispatch(toggleCompletedTodo(id))
    }

    const removeTodoHandler = (id) => {
        dispatch(removeTodo(id))
    }


    return (
        <div className={s.todoitem}>
            <div
                className={s.todoitem__text1}
                onClick={() => toggleTodoHandler(value.id)}
            >
                Complete
            </div>
            <div className={s.todoitem__text2} >
                {value.text}
            </div>
            <div
                className={s.todoitem__text3}
                onClick={() => removeTodoHandler(value.id)}
            >
                Delete
            </div>
            {(value.completed === true) && 'completed'}
        </div>
    )
}

export default TodoItem