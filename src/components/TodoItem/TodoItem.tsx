import React from 'react'
import s from './todoItem.module.css'

const TodoItem = () => {
    const completed = false
    return (
        <div className={s.todoitem}>
            <div className={s.todoitem__text1}>
                Complete
            </div>
            <div className={s.todoitem__text2}>
                Todo Text
            </div>
            <div className={s.todoitem__text3}>
                Delete
            </div>
        </div>
    )
}

export default TodoItem