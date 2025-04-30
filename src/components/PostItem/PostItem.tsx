import React from 'react'
import s from './postItem.module.css'
import { deletePostByIdThunk } from '../../features/post/postSlice'
import { useAppDispatch } from '../../hooks'
import { IPost } from '../../features/post/postSlice'

const PostItem = ({ post }: { post: IPost }) => {
    const dispatch = useAppDispatch();

    return (
        <div
            className={s.postitem}
            onClick={() => dispatch(deletePostByIdThunk(post.id))}
        >
            {post.title}
        </div >
    )
}

export default PostItem