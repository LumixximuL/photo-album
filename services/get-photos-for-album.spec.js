import fetch from 'node-fetch';
import getPhotosForAlbum from './get-photos-for-album';

jest.mock('node-fetch');

describe('services - get photos for album', () => {
    it('should fetch photos for album', async () => {
        // given
        const albumId = 'some id';

        fetch.mockResolvedValue({})
        
        // when
        await getPhotosForAlbum(albumId);

        // then
        const expectedUrl = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;

        expect(fetch).toHaveBeenNthCalledWith(1, expectedUrl);
    });

    it('should return empty list of photos when response is not ok', async () => {
        // given
        const albumId = 'some id';

        fetch.mockResolvedValue({})
        
        // when
        const actual = await getPhotosForAlbum(albumId);

        // then
        expect(actual).toStrictEqual([]);
    });

    it('should return json from response on success', async () => {
        // given
        const albumId = 'some id';
        const photos = [{id: 'some photo id 1'}, {id: 'some photo id 2'}];
        const response = {
            json: jest.fn().mockResolvedValue(photos),
            ok: true,
        }

        fetch.mockResolvedValue(response)
        
        // when
        const actual = await getPhotosForAlbum(albumId);

        // then
        expect(actual).toStrictEqual(photos);
    });
});