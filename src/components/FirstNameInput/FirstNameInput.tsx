import s from './firstNameInput.module.css'

// Redux
import { useDispatch } from 'react-redux'
import { setFirstNameAction } from '../../features/user/userSlice';


const FirstNameInput = () => {

    // Redux - хук для вызова actions
    const dispatch = useDispatch();

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        // Вызов действия
        dispatch(setFirstNameAction(e.target.value));
    }

    return (
        <div className={s.firstnameinput}>
            <input type="text" placeholder='Введите имя' onChange={onChangeHandler} />
        </div>
    )
}

export default FirstNameInput
