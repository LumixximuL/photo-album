import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Photo from '../photo';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    photoList: {
        background: '#efefef',
        borderRadius: 4,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: theme.spacing(1),
    }
}));

const Album = (props) => {
    const classes = useStyles();

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="album-content"
                id="album-header"
            >
                <Typography className={classes.heading}>{`Album ${props.albumId} has ${props.photos.length} photos`}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div className={classes.photoList}>
                    {props.photos.map((photo) => <Photo {...photo}/>)}
                </div>
            </AccordionDetails>
        </Accordion>
    )
}

Album.propTypes = {
    albumId: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        thumbnailUrl: PropTypes.string,
        title: PropTypes.string,
    })).isRequired,
}

export default Album;