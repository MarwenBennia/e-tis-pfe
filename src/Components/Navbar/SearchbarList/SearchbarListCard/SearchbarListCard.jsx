import React from 'react'
import {Card,CardMedia,CardContent,Typography} from '@material-ui/core'

const SearchbarListCard = ({product}) => {
  return (
      <Card>
        <CardMedia className='media' image={product.image} title={product.name}></CardMedia>
        <CardContent>
            <div>
            <Typography variant='h5' gutterBottom>{product.name}</Typography>
            <Typography variant='h5'>{product.price}</Typography>
            </div>
            <div>
            <Typography variant='body2' color='textSecondary'>{product.description}</Typography>
            </div>
        </CardContent>
    </Card>
  )
}

export default SearchbarListCard