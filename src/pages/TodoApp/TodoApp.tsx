import { useSelector } from 'react-redux'
import FormTodo from '../../components/FormTodo/FormTodo'
import TodoItem from '../../components/TodoItem/TodoItem'
import s from './todoApp.module.css'

// Redux

const TodoApp = () => {
    const todos = useSelector((state) => (state.todo.todoArr))

    return (
        <div className={s.todoapp}>
            <div className="container">
                <div className={s.todoapp__body}>
                    <FormTodo />
                    {todos?.map((item) => (
                        <TodoItem
                            key={item.id}
                            value={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TodoApp
