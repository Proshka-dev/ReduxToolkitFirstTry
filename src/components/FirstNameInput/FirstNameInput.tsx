import s from './firstNameInput.module.css'

// Redux
import { setFirstNameReducer } from '../../features/user/userSlice';

// TS (импорт типизированного хука вместо стандартного для Redux useDispatch)
import { useAppDispatch } from '../../hooks';

const FirstNameInput = () => {

    // Redux - хук для вызова actions
    const dispatch = useAppDispatch();

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        // Вызов действия
        dispatch(setFirstNameReducer(e.target.value));
    }

    return (
        <div className={s.firstnameinput}>
            <input type="text" placeholder='Введите имя' onChange={onChangeHandler} />
        </div>
    )
}

export default FirstNameInput
