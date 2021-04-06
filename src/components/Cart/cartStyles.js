import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(() => ({
    cartContainer: {
        minHeight: '90vh',
        padding: '2.5rem 1rem'
    },
    emptyCart: {
        minHeight: '65vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
    },
    cartActions: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '2rem 0rem',
        gap: '1.25rem',
    },
    cartTitle: {
        paddingBottom: '1rem',
    },
    cartImage: {
        width: '5rem',
        height: '5rem',
    },
    productCell :{
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
    }
}))