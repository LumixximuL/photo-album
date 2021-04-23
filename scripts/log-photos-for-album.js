const args = require('yargs').argv;
const getPhotosForAlbum = require('../services/get-photos-for-album');

getPhotosForAlbum(args.albumId)
    .then((photos) => {
        photos.forEach((photo) => {
            console.info(`${photo.id} ${photo.title}`)
        })
    })
    .catch((error) => {
        console.error(error);
    })