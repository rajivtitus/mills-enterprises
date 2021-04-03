import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(() => ({
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
        transform: 'translate(-50%,-40%)',
        textAlign: 'center',        
    },
    slideTitle: {
        color: 'white',
        textShadow: '2px 2px #000000',
        zIndex: 2,
    },
    slideButton: {
        margin: '1.75rem 0rem',
        background: '#581818',
        color: 'white',
    }
}))