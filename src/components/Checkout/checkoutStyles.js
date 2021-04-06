import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    container: {
        minHeight: '90vh',
        marginTop: '2.5rem',
        marginBottom: '7.5rem',
        width: 'auto',
        [theme.breakpoints.up(600)]: {
            width: 600,
        }
    },
    orderConfirmation: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        margin: '2rem 1rem',
    },
    homeButton: {
        margin: '2.5rem 0rem',
    }
}))