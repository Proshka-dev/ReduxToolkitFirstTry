import FirstNameInput from '../../components/FirstNameInput/FirstNameInput'
import FirstNameLabel from '../../components/FirstNameLabel/FirstNameLabel'
import LastNameInput from '../../components/LastNameInput/LastNameInput'
import LastNameLabel from '../../components/LastNameLabel/LastNameLabel'
import s from './stateChange.module.css'

const StateChange = () => {

    return (
        <div className={s.statechange}>
            <div className="container">
                <div className={s.statechange__body}>
                    <div>
                        Redux Toolkit State Change
                    </div>
                    <FirstNameInput />
                    <LastNameInput />
                    <FirstNameLabel />
                    <LastNameLabel />
                </div>
            </div>
        </div>
    )
}

export default StateChange
