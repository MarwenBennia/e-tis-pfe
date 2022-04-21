import React from 'react'

//material Ui Card components
import {Card , CardMedia , CardContent , Typography ,Link} from '@material-ui/core'
//Styles product
import useStyles from './Styles';

export const Product = ({product,onClick}) => {
    const classes = useStyles();
  return (
    <Card className={classes.root} onClick ={onClick}>
    <Link href={`/productdetails/${product.ref}`} style={{ textDecoration: 'none',color:'black' }}>
        <CardMedia className={classes.media} image={"http://localhost:4000/"+product.image} title={product.name}></CardMedia>
        <CardContent>
            <div className={classes.cardContent}>
            <Typography variant='h5' gutterBottom>{product.name}</Typography>
            <Typography variant='h5'>{product.price}DT</Typography>
            </div>
        </CardContent>
    </Link>
    </Card>
  )
}
