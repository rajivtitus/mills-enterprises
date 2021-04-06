import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(() => ({
    formContainer: {
      padding: "1rem 2rem",
    },
    divider: {
      margin: '0.5rem 0rem',
    },
    formActions: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '2.5rem',
        padding: '2rem 0rem',
    },
    productRow: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    productCell: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
    },
    productImage: {
      width: '3.5rem',
      height: '3.5rem',
    },
  }));