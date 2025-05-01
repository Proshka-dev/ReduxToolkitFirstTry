//import React from 'react'
import s from './comments.module.css'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { commentsApi } from './api'
import CommentsItem from '../CommentsItem/CommentsItem';
import { useState } from 'react';
import CommentsModal from '../CommentsModal/CommentsModal';

const Comments = () => {
    // const dispatch = useAppDispatch();
    // const comments = useAppSelector((state) => state.comments.comments);
    // const loadingStatus = useAppSelector((state) => state.comments.loadingPostStatus);

    // Хук для установки связи данных на сервере и данных у нас
    const { data: comments, isLoading } = commentsApi.useGetCommentsQuery();

    // Хук для модального окна
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className={s.comments}>
            <div>
                {(isLoading) && 'Loading...'}
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
            <CommentsModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
                Содержимое модального окна
            </CommentsModal>

            {comments?.map((item) => (
                <CommentsItem key={item.id} comment={item} />
            ))}

        </div>
    )
}

export default Comments