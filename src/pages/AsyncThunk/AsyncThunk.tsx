import Posts from '../../components/Posts/Posts'
import s from './asyncThunk.module.css'

const AsyncThunk = () => {
    return (
        <div className={s.asyncthunk}>
            <div className="container">
                <div className={s.asyncthunk__body}>
                    <Posts />
                </div>
            </div>
        </div>
    )
}

export default AsyncThunk
