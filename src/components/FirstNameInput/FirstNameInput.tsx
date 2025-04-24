import s from './firstNameInput.module.css'

const FirstNameInput = () => {
    return (
        <div className={s.firstnameinput}>
            <input type="text" placeholder='Введите имя' />
        </div>
    )
}

export default FirstNameInput
