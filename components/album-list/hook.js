import { useEffect, useState } from 'react';
import getAlbumsById from '../../services/get-albums-by-id';

const useAlbumList = () => {
    const [albumsById, setAlbumsById] = useState([]);

    useEffect(() => {
        loadAlbums();
    }, []);

    const loadAlbums = async () => {
        const newAlbumsById = await getAlbumsById();

        setAlbumsById(newAlbumsById);
    }

    return albumsById;
}

export default useAlbumList;