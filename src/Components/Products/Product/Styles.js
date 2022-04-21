import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(()=>({
    root :{
        maxWidth : '100%',
        "&:hover":{
            boxShadow : '0px 5px 5px  lightgreen',
            Translate:'10px',
        }
    },
    media :{
        height : 0,
        paddingTop : '60%',
    },
    cardActions : {
        display:'flex',
        justifyContent : 'flex-end',
    },
    cardContent : {
        display : 'flex',
        justifyContent : 'space-between',
    },
}));