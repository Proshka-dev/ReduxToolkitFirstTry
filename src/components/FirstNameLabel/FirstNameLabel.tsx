import s from './firstNameLabel.module.css'

// Redux
import { useSelector } from 'react-redux'

interface IState {
    user: {
        firstName: string;
    }
}

const FirstNameLabel = () => {

    // Redux - хук useSelector
    const name = useSelector((state: IState) => (state.user.firstName));

    return (
        <div className={s.firstnamelabel}>
            Имя: {name}
        </div>
    )
}

export default FirstNameLabel
