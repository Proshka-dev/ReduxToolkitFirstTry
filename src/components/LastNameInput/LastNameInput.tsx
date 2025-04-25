import s from './lastNameInput.module.css'

// Redux
import { useAppDispatch } from '../../hooks';
import { setLastNameReducer } from '../../features/user/userSlice';

const SecondNameInput = () => {

    // Redux - хук для вызова actions
    const dispatch = useAppDispatch();

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        // Вызов действия
        dispatch(setLastNameReducer(e.target.value));
    }

    return (
        <div className={s.secondnameinput}>
            <input type="text" placeholder='Введите фамилию' onChange={onChangeHandler} />
        </div>
    )
}

export default SecondNameInput
