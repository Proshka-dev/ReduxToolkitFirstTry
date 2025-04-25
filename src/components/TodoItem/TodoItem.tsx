import React from 'react'
import s from './todoItem.module.css'
import { useAppDispatch } from '../../hooks'
import { toggleCompletedTodoReducer, removeTodoReducer } from '../../features/todo/todoSlice'

import { ITodo } from '../../features/todo/todoSlice'

const TodoItem = ({ value }: { value: ITodo }) => {

    const dispatch = useAppDispatch();

    const toggleTodoHandler = (id: string) => {
        dispatch(toggleCompletedTodoReducer(id))
    }

    const removeTodoHandler = (id: string) => {
        dispatch(removeTodoReducer(id))
    }


    return (
        <div className={s.todoitem}>
            <div
                className={s.todoitem__text1}
                onClick={() => toggleTodoHandler(value.id)}
            >
                Complete
            </div>
            {/* <div className={`${s.todoitem__text2} ${value.completed === true ? s.todoitem__text2_completed : ''}`} > */}
            <div className={`${s.todoitem__text2} ${value.completed === true && s.todoitem__text2_completed}`} >
                {value.text}
            </div>
            <div
                className={s.todoitem__text3}
                onClick={() => removeTodoHandler(value.id)}
            >
                Delete
            </div>
        </div>
    )
}

export default TodoItem