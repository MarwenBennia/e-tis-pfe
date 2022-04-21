import React from 'react'
import { IconButton,Badge,Link,Paper,Slide, Typography} from '@mui/material'
import {ShoppingCart} from '@material-ui/icons'
import useStyles from '../Styles'

const Cart = () => {
    const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open])

    const classes = useStyles()
  return (
      <div>
    <IconButton aria-label='Show cart items' color='inherit' className={classes.cart} onClick={''}>
          <Badge badgeContent={0} color='secondary' >
            <Link><ShoppingCart htmlColor='white' fontSize='medium'/></Link>
          </Badge>
        </IconButton>
    </div>
  )
}

export default Cart