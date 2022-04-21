import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(()=>({
    productdetails:
    {
    boxShadow:'0px 0px 20px lightgreen',
    marginTop:'165px',
    marginLeft:'30px',
    width:'95vw',
    height:'75vh',
    display:'flex',
    },
    productimage:
    {
        borderRadius:'10px',
        marginTop:'10px',
        marginLeft:'100px',
        height:500,
        width:600,
    },
    productcontent:
    {
        marginTop:'20px',
        fontSize:'large', 
        borderRadius:'10px',
        width:'40vw',
        height:"60vh",
        marginLeft:'50px'
    },
    contact:{
        background:'orange',
        marginTop:'5px',
        borderRadius:'10px',
        width:'40vw',
        marginLeft:'50px'
    }

}));