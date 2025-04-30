import PostsRtx from '../../components/PostsRtx/PostsRtx'
import s from './postsByRtx.module.css'

const PostsByRtx = () => {
    return (
        <div className={s.postsbyrtx}>
            <div className="container">
                <div className={s.postsbyrtx__body}>
                    <PostsRtx />
                </div>
            </div>
        </div>
    )
}

export default PostsByRtx
