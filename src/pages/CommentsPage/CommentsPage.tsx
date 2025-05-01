import Comments from '../../components/Comments/Comments'
import s from './commentspage.module.css'

const CommentsPage = () => {
    return (
        <div className={s.commentspage}>
            <div className="container">
                <div className={s.commentspage__body}>
                    <Comments />
                </div>
            </div>
        </div>
    )
}

export default CommentsPage
