import fetch from 'node-fetch';
import getAlbumsById from './get-albums-by-id';

jest.mock('node-fetch');

describe('services - get albums by id', () => {
    it('should fetch photos for album', async () => {
        // given
        fetch.mockResolvedValue({});
        
        // when
        await getAlbumsById();

        // then
        const expectedUrl = 'https://jsonplaceholder.typicode.com/photos';

        expect(fetch).toHaveBeenNthCalledWith(1, expectedUrl);
    });

    it('should return empty object when response is not ok', async () => {
        // given
        fetch.mockResolvedValue({});
        
        // when
        const actual = await getAlbumsById();

        // then
        expect(actual).toStrictEqual({});
    });

    it('should return albums by id', async () => {
        // given
        const albumId1 = 'some album 1';
        const albumId2 = 'some album 2';
        const photos = [
            {
                albumId: albumId1,
                id: 'some photo 1'
            },
            {
                albumId: albumId1,
                id: 'some photo 2'
            },
            {
                albumId: albumId2,
                id: 'some photo 3'
            },
            {
                albumId: albumId2,
                id: 'some photo 4'
            }
        ];
        const response = {
            json: jest.fn().mockResolvedValue(photos),
            ok: true,
        };

        fetch.mockResolvedValue(response);
        
        // when
        const actual = await getAlbumsById();

        // then
        const expectedAlbumsById = {};

        photos.forEach((photo) => {
            if (!expectedAlbumsById[photo.albumId]) {
                expectedAlbumsById[photo.albumId] = [];
            }

            expectedAlbumsById[photo.albumId].push(photo);
        });

        expect(actual).toStrictEqual(expectedAlbumsById);
    });
});