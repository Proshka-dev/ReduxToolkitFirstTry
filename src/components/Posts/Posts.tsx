import React from 'react'
import PostItem from '../PostItem/PostItem'
import s from './posts.module.css'

const Posts = () => {
    return (
        <div className={s.posts}>
            <button
                type='submit'
                className={s.posts__button}
            >
                Get posts
            </button>
            <PostItem />
        </div>
    )
}

export default Posts