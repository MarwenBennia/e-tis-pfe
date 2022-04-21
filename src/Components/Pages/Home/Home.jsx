import { Typography,Card } from '@mui/material';
import React from 'react'
import "react-multi-carousel/lib/styles.css";
//Component imports 
import ImageGallaryComponent from './Carousel/Carousel';
//importing Styles.js
import useStyles from './Styles'

const Home = () => {
  const classes = useStyles();
  return (
    <div className='Home'>
    <div>
      <ImageGallaryComponent/>
    </div>
    <div className={classes.aboutus}>
    <Card style={{borderRadius:'10px',display:'flex'}}>
    <img src='./../../../Assets/logo tis.png' alt='tisimage'/>
      <Typography style={{textAlign:'center'}}>
       <h2>A propos de Nous</h2>
            <p>TUNISIE INFORMATIQUE SERVICES « TIS » est une société anonyme, 
            filiale de la Banque Nationale Agricole, 
            elle a été créée en juin 1991, 
            Elle est spécialisée dans le domaine informatique et réseaux 
            et elle assure à ce titre un service complet d’Intégrateur de solutions matérielles et logicielles.</p>
      </Typography>
    </Card>
    </div>
      <div className={classes.responsalbe}><h2>Nos Services</h2></div>
      <div className={classes.responsalbe}><h2>Partenariat</h2></div>
    </div>
  )
}

export default Home