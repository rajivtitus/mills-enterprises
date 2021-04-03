import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    position: "static",
    background: "#581818",    
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
  },
  logo: {  
    height: '3.5rem',
    width: '3.5rem',
    marginRight: '0.5rem',
  },
  title: {
    display: "flex",
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit',
  }
}));
