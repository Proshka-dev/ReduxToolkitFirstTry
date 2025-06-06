import React from 'react'
import PostItem from '../PostItem/PostItem'
import s from './posts.module.css'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getPostsThunk } from '../../features/post/postSlice'

const Posts = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector((state) => state.post.posts);
    const loadingStatus = useAppSelector((state) => state.post.loadingPostStatus);

    return (
        <div className={s.posts}>
            <div>
                {(loadingStatus === 'loading') && 'Loading...'}
            </div>

            <button
                type='submit'
                className={s.posts__button}
                onClick={() => dispatch(getPostsThunk())}
            >
                Get posts
            </button>
            {posts?.map((item) => (
                <PostItem key={item.title} post={item} />
            ))}

        </div>
    )
}

export default Posts