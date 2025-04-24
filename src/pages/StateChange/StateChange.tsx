import FirstNameInput from '../../components/FirstNameInput/FirstNameInput'
import FirstNameLabel from '../../components/FirstNameLabel/FirstNameLabel'
import SecondNameInput from '../../components/SecondNameInput/SecondNameInput'
import SecondNameLabel from '../../components/SecondNameLabel/SecondNameLabel'
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
                    <SecondNameInput />
                    <FirstNameLabel />
                    <SecondNameLabel />
                </div>
            </div>
        </div>
    )
}

export default StateChange
