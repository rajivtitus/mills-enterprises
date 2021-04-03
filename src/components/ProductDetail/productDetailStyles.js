import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(() => ({
    container:{
        minHeight: '90vh',
        display: 'flex',
        gap:'2rem',
        padding: '2rem 1rem',
    },
    productFlex: {
        flex: 1,
        display: 'flex',
        justifyContent:'center',
    },
    productImg: {
        alignItems: 'center',        
    },
    productDesc: {
        flexDirection: 'column',
        gap: '0.25rem', 
    },
    productActions:{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '3.5rem',
        gap: '1rem',
    },
  
}))