import s from './firstNameLabel.module.css'

// Redux
import { useAppSelector } from '../../hooks';

const FirstNameLabel = () => {

    // Redux - хук useSelector
    const name = useAppSelector((state) => (state.user.firstName));

    return (
        <div className={s.firstnamelabel}>
            Имя: {name}
        </div>
    )
}

export default FirstNameLabel

