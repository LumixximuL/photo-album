import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    skeleton: {
        marginBottom: 1,
        width: `calc(100vw - ${theme.spacing(8)}px)`,
        '&:first-child': {
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
        },
        '&:last-child': {
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
        },
    },
}));

const EmptyList = () => {
    const classes = useStyles();
    const skeletons = [];

    for(let i = 0; i < 20; i++) {
        skeletons.push(<Skeleton className={classes.skeleton} height={48} key={i} variant="rect" />)
    }

    return (
        <div className={classes.container}>
            {skeletons}
        </div>
    )
}

export default EmptyList;