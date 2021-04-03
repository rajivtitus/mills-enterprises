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
    stepActions: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '3rem 2rem',
    }
}))