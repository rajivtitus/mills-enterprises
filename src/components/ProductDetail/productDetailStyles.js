import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    container:{
        minHeight: '90vh',
        display: 'flex',
        gap:'1rem',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            paddingBottom: '3.5rem',
        },
    },
    productFlex: {
        flex: 1,
        display: 'flex',
        justifyContent:'center',
    },
    title: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.75rem',
        }
    },
    imageContainer: {
        alignItems: 'center',              
    },
    productImage: {
        maxHeight: '100%',
        maxWidth: '100%',
    },
    productDesc: {
        flexDirection: 'column',
    },
    productQtyActions:{
        display: 'flex',
        alignItems: 'center',
        padding: '0.5rem 0rem',
        marginBottom: '1.75rem',
        gap: '1rem',
    },
    actionButton: {
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        }
    },
    relatedItemsContainer: {
        marginBottom: "7.5rem",
    },
    relatedItemsTitle: {
        margin: "1.75rem 0rem",
    }
}))