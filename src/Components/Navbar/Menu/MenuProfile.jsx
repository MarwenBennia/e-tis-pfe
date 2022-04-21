import React,{useState} from 'react';
//Stylejs imports 
import useStyle from '../Styles'
//Material-ui imports
import { IconButton,ClickAwayListener,Grow,Paper,Popper,MenuItem,MenuList,Link,Modal,Typography,List,ListItem,TextField,Button} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';

const MenuProfile = () => {
    const [open, setOpen] = React.useState(false)
    const anchorRef = React.useRef(null)
    const [loggedin,setLoggedin]= useState(false)
    const [mdpoublier,setMdpoublier] = useState(false)
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open])
    const classes = useStyle();
    //Login modal
    const [mopen, setmOpen] = React.useState(false);
    const handlemodalOpen = () => setmOpen(true);
    const handlemodalClose = () => {
      setmOpen(false)
      setMdpoublier(false)
    }
    const style = {
    display:'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    };
  return (
      <>
      {loggedin && <div>
      <IconButton className={classes.profilebtn} onClick={handleToggle}>
        <AccountCircleIcon 
          fontSize='medium'
          htmlColor='white'
          ref={anchorRef}
          id="composition-button"/></IconButton>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <Link href='/profile' style={{textDecoration:'none',color:'black'}}><MenuItem onClick={handleClose}>Profile</MenuItem></Link>
                    <Link href='/' style={{textDecoration:'none',color:'black'}}><MenuItem onClick={handleClose}>Se Deconnecter</MenuItem></Link>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        </div>}
        {!loggedin && 
        <div>
        <IconButton className={classes.profilebtn} onClick={handlemodalOpen}>
        <LoginIcon htmlColor='white'/></IconButton>
       {!mdpoublier &&
        <Modal
        open={mopen}
        onClose={handlemodalClose}
        aria-labelledby="modal-login-register"
        aria-describedby="modal-login-register"> 
        <Paper sx={style}>
          <List style={{marginLeft:'10px'}}>
          <Typography id="typo-connecter" variant="h5" component="h2">Se Connecter</Typography>
            <ListItem><TextField label="Adresse Electronique" size='small'></TextField></ListItem>
            <ListItem><TextField label="Mot de Passe" size='small'></TextField></ListItem>
            <ListItem><Button variant='contained' style={{marginLeft:'30px'}} onClick={setLoggedin}>Se Connecter</Button></ListItem>
            <Button style={{marginRight:'50px',marginTop:'50px'}} onClick={()=>setMdpoublier(true)}>J'ai oublier mon mot de passe</Button>
          </List>
          <List>
          <Typography id="typo-inscrire" variant="h5" component="h2">S'Inscrire</Typography>
            <ListItem><TextField label="Nom & Prenom" size='small'></TextField></ListItem>
            <ListItem><TextField label="Adresse Electronique" size='small'></TextField></ListItem>
            <ListItem><TextField label="Numero telephone" size='small'></TextField></ListItem>
            <ListItem><TextField label="Mot de Passe" size='small'></TextField></ListItem>
            <ListItem><TextField label="Repeter Mot de Passe" size='small'></TextField></ListItem>
            <ListItem><Button variant='contained' style={{marginLeft:'30px'}}>Creer Compte</Button></ListItem>
          </List>
        </Paper>
      </Modal>}
      {mdpoublier &&
         <Modal
        open={mopen}
        onClose={handlemodalClose}
        aria-labelledby="modal-mdpoublie"
        aria-describedby="modal-mdpoublie"> 
        <Paper sx={style}>
          <List style={{marginLeft:'160px',marginTop:'50px'}}>
          <Typography id="modal-modal-title" variant="h5" component="h2">Retrouver Mot de passe</Typography>
            <ListItem style={{marginTop:'50px'}}><TextField label="Adresse Electronique" size='small'></TextField></ListItem>
            <ListItem><Button variant='contained' style={{marginLeft:'50px',marginTop:'20px'}}>Envoyer</Button></ListItem>
          </List>
        </Paper>
      </Modal>}
        </div>}
      </>
  )
}

export default MenuProfile