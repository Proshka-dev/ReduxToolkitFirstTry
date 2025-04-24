import s from './lastNameLabel.module.css'

// Redux
import { useSelector } from 'react-redux'

interface IState {
    user: {
        lastName: string;
    }
}

const LastNameLabel = () => {
    // Redux - хук useSelector
    const lastName = useSelector((state: IState) => (state.user.lastName));


    return (
        <div className={s.secondnamelabel}>
            Фамилия: {lastName}
        </div>
    )
}

export default LastNameLabel
