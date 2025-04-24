import s from './secondNameInput.module.css'

const SecondNameInput = () => {
    return (
        <div className={s.secondnameinput}>
            <input type="text" placeholder='Введите фамилию' />
        </div>
    )
}

export default SecondNameInput
