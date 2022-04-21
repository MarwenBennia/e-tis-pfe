import React from 'react'
//material ui imports
import { AppBar, Toolbar,Typography,Link} from '@material-ui/core'
//Icons Import
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
//Component Imports
import MenuProfile from './Menu/MenuProfile'
import Cart from './Menu/Cart'
import Buttonlist from './Buttonlist';
import SearchbarList from './SearchbarList/SearchbarList';
//Style import
import useStyles from './Styles'
//logo import
import logo from '../../Assets/logo tis.png'


const Navbar = ({functionFilter}) => {
    const classes = useStyles();
  return (
    <nav>
{/* BUTTON BAR */}
    <AppBar className={classes.btnBar}>
        <Toolbar>
        <h3 style={{marginTop:'80px'}}>Tunisie Informatique Service</h3>
          <Buttonlist/>
        <div className={classes.grow}/>
        <div className={classes.button}/>  
        </Toolbar>
    </AppBar>

{/* CONTACT BAR  */}
    <AppBar variant='h6' className={classes.appBar}>
        <Toolbar>
          <Typography variant='h6' className={classes.title} color='inherit'>
              <Link href="/"  underline="none"><img src= {logo} alt='e-tis' height="100px" width="150px" className={classes.image} /></Link>
          </Typography>
{/* SearchBar */}
          <div className={classes.searchbar}>
        <SearchbarList functionFilter={functionFilter}/>
          </div>
{/* CONTACT INFOS */}
          <div className={classes.contactinfo}>
            <p><PhoneIcon/> 9999999</p>
            <p><MailIcon/> TIS@TIS.TIS</p>
          </div>
{/* PROFILE && CART BUTTON */}
        <div className= {classes.profilebtn}>
            <MenuProfile/>
        </div>    
        <div className={classes.cart}>
            <Cart/>
        </div>
        </Toolbar>
    </AppBar>
    </nav>
  )
}

export default Navbar