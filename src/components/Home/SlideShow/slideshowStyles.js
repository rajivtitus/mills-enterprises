import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    imageContainer:{
        position: 'relative',
    },
    slideImage: {
        height: '95vh',
        width: '100%',
        objectFit: 'cover',   
    },
    overlay: {
        position: 'absolute',
        height: '95vh',
        width: '100%',
        top: 0,         
        background: 'rgba(0,0,0,0.35)',
    },
    slideDescription : {
        position: 'inherit',
        top: '50%',
        left: '50%',
        width: '55%',
        transform: 'translate(-50%,-50%)',
        textAlign: 'center',        
        [theme.breakpoints.down('md')]: {
            width: '85%',
        },
    },
    slideTitle: {
        color: 'white',
        textShadow: '2px 2px #000000',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.75rem',
        },
    },
    slideButton: {
        margin: '1.75rem 0rem',
    }
}))