import { useEffect, useState } from 'react';
import s from './albumsPage.module.css'
import axios from 'axios';
import { IAlbum } from '../../features/albums/albumsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setAlbumsReducer } from '../../features/albums/albumsSlice';
import AlbumsItem from '../../components/AlbumsItem/AlbumsItem';
import CommentsModal from '../../components/CommentsModal/CommentsModal';
import fetchAndValidateAlbums from './api';

async function albumsLoader() {
    return await fetchAndValidateAlbums()
        .then((data) => {
            console.log('Загружены альбомы:', data);
            return data;
        })
        .catch(() => {
            console.log('Failed to fetch albums');
        });
};


const AlbumsPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [albumInModal, setAlbumInModal] = useState<IAlbum | undefined>(undefined);

    // Redux - хук для вызова actions
    const dispatch = useAppDispatch();
    // Redux - хук useSelector
    const albums = useAppSelector((state) => (state.albums.albumsArr));

    async function loadAlbums() {
        setIsLoading(true);
        const loadedData = await albumsLoader();
        if (loadedData) {
            console.log('Альбомы успешно загружены')
            // Redux - сохраняем данные в хранилище
            dispatch(setAlbumsReducer(loadedData))
        }
        setIsLoading(false);
    }

    useEffect(() => {
        loadAlbums();
    }, []);

    function onClickItemHandler(item: IAlbum) {
        console.log('Сработал onClick на Item с id = ', item.id)

        setAlbumInModal(item);
        setModalIsOpen(true);
    }

    return (
        <div className={s.albumspage}>
            <div className="container">
                <div className={s.albumspage__body}>
                    <button className={s.albumspage__button} onClick={() => loadAlbums()}>Load albums</button>

                    {isLoading && (
                        <div>
                            Loading...
                        </div>
                    )}

                    <div className={s.albumspage__list}>
                        {albums.map((item) => (
                            <div className={s.albumspage__item} key={item.id}>
                                <AlbumsItem
                                    key={item.id}
                                    album={item}
                                    onClick={() => onClickItemHandler(item)}
                                />
                            </div>
                        ))}

                    </div>
                    <CommentsModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
                        {albumInModal && (
                            <div className={s.albumspage__modal}>
                                <div>Id альбома: {albumInModal.id}</div>
                                <div>Название альбома: {albumInModal.title}</div>
                                <div>Id пользователя: {albumInModal.userId}</div>
                            </div>
                        )}
                    </CommentsModal>
                </div>
            </div>
        </div >
    )
}

export default AlbumsPage