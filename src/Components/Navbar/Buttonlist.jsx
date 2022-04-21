import React,{useState,useEffect} from 'react'
import useStyles from './Styles'
//material ui component
import {Button,Menu} from '@material-ui/core'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
//importing axios
import api from '../../api/api'
const Buttonlist = () => {

    //Get all Groupcategories
  const retrieveCategories = async()=>{
    const resp = await api.get('/groupcategories')
    return resp.data
  }

  useEffect(()=>{
    async function fetch(){
      const groupcategoriesList = await retrieveCategories()
      setGroupcategories(groupcategoriesList)
    }
    fetch()
    
    
  },[])
  const [groupcategories,setGroupcategories] = useState([]);

    const classes = useStyles();
    return (
      <>
      <div className={classes.btnlist}>
      {groupcategories.map((groupcategory)=>
       <PopupState variant="popover" popupId={groupcategory._id.toString()}>
      {(popupState) => (
        <React.Fragment>
          
          <div>
          <Button style={{color:'white'}} variant="variant" onMouseEnter={popupState.open} {...bindTrigger(popupState)} endIcon={<ArrowDropDownIcon/>}>
            {groupcategory.name}
          </Button>
          <Menu {...bindMenu(popupState)} style={{marginTop:'50px',marginLeft:'10px'}}
          MenuListProps={{onMouseLeave:popupState.close}}
          >
           {groupcategory.categories.map(category => <Button href='/store' style={{display:'block'}}>{category.name}</Button>)}
          </Menu> 
         
          
          </div>
        </React.Fragment>
          )}
    </PopupState>
      )}
    </div>
      
    </>
  )
}

export default Buttonlist