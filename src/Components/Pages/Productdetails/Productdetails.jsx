import React,{useState,useEffect} from 'react'
//importing axios
import api from '../../../api/api'
import {Paper} from '@material-ui/core'
import useStyles from './Styles.js'
import { ListItem,List, Typography} from '@mui/material';

const Productdetails = () => {
  const classes = useStyles();

    const retrieveProduct = async(pRef)=>{
      const resp = await api.get(`/products/reference/${pRef}`)
      return resp.data
    }
    const [product,setProduct] = useState(null)
    useEffect(()=>{
      async function fetch(){
      let pRef = window.location.pathname.split("/")[2]
      const detailproduct = await retrieveProduct(pRef)
      setProduct(detailproduct)
      
    }
    fetch()
    },[product])
    
  return (
    <>
    {product&& <div className={classes.productdetails}>
          <img className={classes.productimage} src={"http://localhost:4000/"+product.image}   alt="product"/>
    <div>
        <Paper className={classes.productcontent}>
        <List style={{display:'block'}}>
          <ListItem style={{justifyContent:'center'}} ><h2>{product.name}</h2></ListItem>
          <ListItem style={{justifyContent:'center'}}>{product.brand.name}</ListItem>
          <ListItem style={{justifyContent:'center'}}>{product.colors}</ListItem>
          <ListItem style={{justifyContent:'center'}}>{product.description}</ListItem>
        </List>
        </Paper>
        <Paper  className={classes.contact}>
          <Typography style={{display:"flex",justifyContent:"center"}}>Passez Votre Commande:</Typography>
          <Typography style={{display:"flex",justifyContent:"center"}}><b>99999999</b></Typography>
        </Paper>
    </div>
    </div>
    }
    </>
  )
}

export default Productdetails