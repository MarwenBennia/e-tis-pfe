import { makeStyles} from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  //CONTACT BAR CSS
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      paddingTop:'-10px'
    },
    background:'#814e60',
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
  },
  image: {
    marginLeft:'30px',
    marginTop:'-35px',
    position:'absolute'
  },
  //SEARCH
  searchbar:{
    background:'white',
    marginRight:'150px',
    width:'500px',
  },
  //Contact info CSS
  contactinfo:{
    display:'block',
    marginTop:'-10px'
  },
  //Right side CSS
  profilebtn:{
    marginBottom:'5px',
    marginRight:'30px',
    marginLeft:'200px'
  },
  //CART
  cart:{
    marginRight:'30px'
  },
  // BUTTON BAR CSS
  btnBar:{
    background:'#19c786',
    marginTop:'30px',
  },
  btnlist:{
    display:'flex',
    marginLeft:'2cm',
    marginTop:'60px',
  },
}));