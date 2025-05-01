//import React from 'react'
import s from './commentsItem.module.css'
//import { deletePostByIdThunk } from '../../features/post/postSlice'
import { useAppDispatch } from '../../hooks'
import { IComment } from '../../features/comments/commentsSlice'

const CommentsItem = ({ comment }: { comment: IComment }) => {
    const dispatch = useAppDispatch();

    return (
        <div
            className={s.commentsitem}
        //          onClick={() => dispatch(deletePostByIdThunk(post.id))}
        >
            {comment.name}
            {comment.email}
        </div >
    )
}

export default CommentsItem