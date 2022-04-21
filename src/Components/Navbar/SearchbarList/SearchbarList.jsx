import React from 'react'
import useStyles from './../Styles'
import {TextField} from '@material-ui/core'


const SearchbarList = ({functionFilter}) => {

  const classes = useStyles()
  return (
      <>
        <TextField  
          className={classes.searchbar} placeholder=" Chercher Un Produit/Service" onChange={(e)=>functionFilter(e.target.value)}/>

      </>
  )
}

export default SearchbarList