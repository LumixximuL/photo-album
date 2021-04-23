import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        alignItems: 'center',
        background: theme.palette.common.white,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(1),
        width: 150,
    },
    photo: {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    subtitle: {
        color: theme.palette.text.secondary,
        fontSize: 10,
        marginTop: theme.spacing(1),
    },
    title: {
        fontSize: 12,
        marginBottom: theme.spacing(1),
        textAlign: 'center',
    },
}));

const Photo = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <img className={classes.photo} src={props.thumbnailUrl} />
            <Typography className={classes.subtitle}>{`Photo Id - ${props.id}`}</Typography>
            <Typography className={classes.title}>{`Title - ${props.title}`}</Typography>
        </div>
    )
}

Photo.propTypes = {
    id: PropTypes.number.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Photo;