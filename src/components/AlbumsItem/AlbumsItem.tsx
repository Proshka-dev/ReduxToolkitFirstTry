import s from './albumsItem.module.css'
import { IAlbum } from '../../features/albums/albumsSlice'

type TAlbumsItemprops = {
    album: IAlbum;
    onClick: () => void;
}

const AlbumsItem = (props: TAlbumsItemprops) => {

    return (
        <div className={s.albumsitem} onClick={props.onClick}>
            <div>{props.album.id}</div>
            <div>{props.album.title}</div>
            <div>{props.album.userId}</div>
        </div>
    )
}

export default AlbumsItem