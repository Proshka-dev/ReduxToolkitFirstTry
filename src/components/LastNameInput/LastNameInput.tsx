import s from './lastNameInput.module.css'

// Redux
import { useDispatch } from 'react-redux'
import { setLastNameAction } from '../../features/user/userSlice';

const SecondNameInput = () => {

    // Redux - хук для вызова actions
    const dispatch = useDispatch();

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        // Вызов действия
        dispatch(setLastNameAction(e.target.value));
    }

    return (
        <div className={s.secondnameinput}>
            <input type="text" placeholder='Введите фамилию' onChange={onChangeHandler} />
        </div>
    )
}

export default SecondNameInput
