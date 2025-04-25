import { useState } from 'react'
import s from './formTodo.module.css'

//uuid
import { v4 as uuidv4 } from 'uuid';

// Redux
import { useAppDispatch } from '../../hooks';
import { addTodoReducer } from '../../features/todo/todoSlice'

const FormTodo = () => {

    const [todoValue, setTodoValue] = useState('');

    function onChangeInputHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setTodoValue(e.target.value);
    }

    //Redux
    const dispatch = useAppDispatch();

    const onClickButtonHandler = () => {
        const todo = {
            id: uuidv4(),
            text: todoValue,
            completed: false,
        }

        dispatch(addTodoReducer(todo));
        setTodoValue('');
    }

    return (
        <form className={s.formtodo} onSubmit={(e) => e.preventDefault()}>
            <input
                type='text'
                placeholder='Type something...'
                className={s.formtodo__input}
                onChange={onChangeInputHandler}
                value={todoValue}
            />
            <button
                type='submit'
                className={s.formtodo__buttonsubmit}
                onClick={onClickButtonHandler}
            >
                Submit
            </button>
        </form>
    )
}

export default FormTodo