const fetch = require('node-fetch');

const getPhotosForAlbum = async (albumId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    let photos = [];

    if (response.ok) {
        photos = await response.json();
    } else {
        console.error(`Error loading photos for album: ${albumId}`)
    }

    return photos;
}

module.exports = getPhotosForAlbum;