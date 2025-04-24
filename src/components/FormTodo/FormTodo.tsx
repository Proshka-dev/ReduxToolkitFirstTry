import React from 'react'
import s from './formTodo.module.css'

const FormTodo = () => {
    return (
        <form className={s.formtodo} onSubmit={(e) => e.preventDefault()}>
            <input
                type='text'
                placeholder='Type something...'
                className={s.formtodo__input}
            />
            <button
                type='submit'
                className={s.formtodo__buttonsubmit}
            >
                Submit
            </button>
        </form>
    )
}

export default FormTodo