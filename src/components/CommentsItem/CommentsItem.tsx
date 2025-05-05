//import React from 'react'
import s from './commentsItem.module.css'
//import { deletePostByIdThunk } from '../../features/post/postSlice'
import { useAppDispatch } from '../../hooks'
import { IComment } from '../../features/comments/commentsSlice'

const CommentsItem = ({ comment, onClick }: { comment: IComment, onClick: Function }) => {
    // const dispatch = useAppDispatch();

    return (
        <div
            className={s.commentsitem}
            onClick={onClick}
        >
            {comment.name}
            {comment.email}
        </div >
    )
}

export default CommentsItem

// 