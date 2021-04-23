import fetch from 'node-fetch';

export default async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos', {headers: {'Origin': '*'}});
    const albumsById = {};

    if (response.ok) {
        const json = await response.json();

        json.forEach((photo) => {
            if (!albumsById[photo.albumId]) {
                albumsById[photo.albumId] = [];
            }

            albumsById[photo.albumId].push(photo);
        });
    } else {
        console.error('Error loading albums')
    }

    return albumsById;
}