import React from 'react'
import PostItem from '../PostItem/PostItem'
import s from './posts.module.css'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getPosts } from '../../features/post/postSlice'

const Posts = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector((state) => state.post.posts);

    return (
        <div className={s.posts}>
            <button
                type='submit'
                className={s.posts__button}
                onClick={() => dispatch(getPosts())}
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