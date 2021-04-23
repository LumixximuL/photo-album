import Album from '../album';
import EmptyList from '../empty-list';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useAlbumList from './hook';

const useStyles = makeStyles((theme) => ({
    albumList: {
        overflow: 'auto'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        padding: theme.spacing(4),
    },
    title: {
        marginBottom: theme.spacing(2),
    }
}));

const AlbumList = () => {
    const classes = useStyles();
    const albumsById = useAlbumList();
    const albumIds = Object.keys(albumsById);

    return (
        <div className={classes.container}>
            <Typography className={classes.title} variant='h4'>{`${albumIds.length} Albums`}</Typography>
            <div className={classes.albumList}>
                {albumIds.length ? albumIds.map((albumId) => {
                    const photos = albumsById[albumId];

                    return (
                        <Album albumId={albumId} photos={photos} />
                    );
                }) : <EmptyList/>}
            </div>
        </div>
    );
}

export default AlbumList;