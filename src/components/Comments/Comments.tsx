//import React from 'react'
import s from './comments.module.css'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { commentsApi } from './api'
import CommentsItem from '../CommentsItem/CommentsItem';
import { useEffect, useState } from 'react';
import CommentsModal from '../CommentsModal/CommentsModal';
import { skipToken } from '@reduxjs/toolkit/query/react'

const Comments = () => {
    // const dispatch = useAppDispatch();
    // const comments = useAppSelector((state) => state.comments.comments);
    // const loadingStatus = useAppSelector((state) => state.comments.loadingPostStatus);

    // Хуки для модального окна
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [commentId, setCommentId] = useState<string>('');

    // Хук для установки связи данных на сервере и данных у нас
    const { data: comments, isLoading } = commentsApi.useGetCommentsQuery();
    const { data: comment, isLoading: isLoadingComment } = commentsApi.useGetCommentQuery(commentId ?? skipToken);

    // !!! Разобраться !!!
    useEffect(() => {
        if (comment?.id) { setModalIsOpen(true) };
    }, [comment?.id]);
    // !!! Разобраться !!!

    // функция для отображения модального окна
    function showCommentModal(id: string) {
        setCommentId(id);
        //setModalIsOpen(true);
    }

    console.log('isLoadingComment:', isLoadingComment);
    console.log('isLoading:', isLoading);


    return (
        <div className={s.comments}>
            <div>
                {(isLoading) && 'Loading...'}
            </div>
            <div>
                {(isLoadingComment) && 'Loading comment...'}
            </div>

            <button
                type='submit'
                className={s.comments__button}
                onClick={() => (console.log('Клик на кнопке комментов'))}
            >
                Update comments
            </button>

            <button
                className={s.comments__button}
                onClick={() => setModalIsOpen(true)}
            >
                Показать модальное окно
            </button>

            {/* Содержимое модального окна */}
            <CommentsModal isOpen={(modalIsOpen && !isLoadingComment)} onClose={() => setModalIsOpen(false)}>
                <div className={s.comments__modalwrapper} >
                    <div>postId: {comment?.postId}</div>
                    <div>id: {comment?.id}</div>
                    <div>name: {comment?.name}</div>
                    <div>email: {comment?.email}</div>
                    <div>body: {comment?.body}</div>
                </div>
            </CommentsModal>

            {comments?.map((item) => (
                <CommentsItem key={item.id} comment={item} onClick={() => showCommentModal(item.id)} />
            ))}

        </div>
    )
}

export default Comments