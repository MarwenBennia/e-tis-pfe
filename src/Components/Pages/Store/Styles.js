import { makeStyles } from '@material-ui/core'

export default makeStyles(()=>({
    body :{ 
    display:'flex',   
    marginTop:'150px',
    },
    filter:{
    position:'fixed',
    alignItems:'center',
    marginLeft:'20px',
    display:'block',
    },
    productlist:{
        width:'50cm',
        marginLeft:'8cm'
    },
    hidden:{
        display:'none'
    }
}));