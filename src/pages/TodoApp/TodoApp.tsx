import FormTodo from '../../components/FormTodo/FormTodo'
import TodoItem from '../../components/TodoItem/TodoItem'
import s from './todoApp.module.css'

const TodoApp = () => {
    return (
        <div className={s.todoapp}>
            <div className="container">
                <div className={s.todoapp__body}>
                    <FormTodo />
                    <TodoItem />
                </div>
            </div>
        </div>
    )
}

export default TodoApp
