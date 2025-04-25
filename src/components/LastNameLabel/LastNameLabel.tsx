import s from './lastNameLabel.module.css'

// Redux
import { useAppSelector } from '../../hooks';

const LastNameLabel = () => {
    // Redux - хук useSelector
    const lastName = useAppSelector((state) => (state.user.lastName));


    return (
        <div className={s.secondnamelabel}>
            Фамилия: {lastName}
        </div>
    )
}

export default LastNameLabel
