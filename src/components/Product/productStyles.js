import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    cardTitle: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
        }
    },
    link:{
        textDecoration: 'none',
    },
    media: {
        height: '100%',  
        paddingTop: '85%',
        [theme.breakpoints.down('xs')]: {
          paddingTop: '100%',  
        },
    },
}))