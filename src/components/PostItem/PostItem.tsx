import React from 'react'
import s from './postItem.module.css'
import { deletePostById } from '../../features/post/postSlice'
import { useAppDispatch } from '../../hooks'

const PostItem = ({ post }) => {
    const dispatch = useAppDispatch();

    return (
        <div
            className={s.postitem}
            onClick={() => dispatch(deletePostById(post.id))}
        >
            {post.title}
        </div >
    )
}

export default PostItem