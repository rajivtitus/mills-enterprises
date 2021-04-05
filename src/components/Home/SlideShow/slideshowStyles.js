import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    imageContainer:{
        minHeight: '90vh',
        position: 'relative',
        padding: 0,
    },
    slideImage: {
        height: '95vh',
        width: '100%',
        objectFit: 'cover',        
        zIndex: 1,
    },
    slideDescription : {
        position: 'absolute',
        top: '40%',
        left: '50%',
        width: '55%',
        transform: 'translate(-50%,-40%)',
        textAlign: 'center',        
        [theme.breakpoints.down('md')]: {
            width: '85%',
        },
    },
    slideTitle: {
        color: 'white',
        textShadow: '2px 2px #000000',
        zIndex: 2,
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.75rem',
        },
    },
    slideButton: {
        margin: '1.75rem 0rem',
        background: '#581818',
        color: 'white',
    }
}))