import React from 'react'
import {Paper,List,TextField,ListItem,Button} from '@material-ui/core'
import useStyles from './Styles.js'

const ProfilePage = () => {
  const classes = useStyles()
  return (
    <div className={classes.profilepage}>
        <Paper className={classes.profile}>
         <List>
         <div className={classes.profilecontent}>
            <ListItem><TextField type={'text'} value={'Prenom & Nom'} variant={'outlined'} size={'small'} disabled></TextField></ListItem>
            <ListItem><TextField type={'email'} value={'E-mail'} variant={'outlined'} size={'small'} disabled></TextField></ListItem>
            <ListItem><TextField type={'tel'} value={'Numero de Telephone'} variant={'outlined'} size={'small'} disabled></TextField></ListItem>
            <ListItem><TextField type={'text'} value={'Localisation'} variant={'outlined'} size={'small'} disabled></TextField></ListItem>
            <ListItem><Button variant="contained">Modifier</Button></ListItem>
         </div>
         </List>
        </Paper>
    </div>
  )
}

export default ProfilePage