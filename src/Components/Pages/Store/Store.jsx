import React,{useState,useEffect} from 'react'
//Style js import
import  useStyles from './Styles'
//Material-ui imports
import {Checkbox ,FormGroup, FormControlLabel,Slider,Box,FormControl,InputLabel,Select,MenuItem,Button} from '@material-ui/core'
//component import
import Products from '../../Products/Products'
//axios call
import api from '../../../api/api'

const Store = ({filterText}) => {
  //Get all categories
  const retrieveCategories = async()=>{
    const resp = await api.get('/categories')
    return resp.data
  }
  const [categories,setCategories] = useState([]);

  useEffect(()=>{
    async function fetch(){
      const categoriesList = await retrieveCategories()
      setCategories(categoriesList)
    }
    fetch()
    
  },[])
  //Get all Brands
  const retrieveBrands = async()=>{
    const resp = await api.get('/brands')
    return resp.data
  }
  const [brands,setBrands] = useState([]);

  useEffect(()=>{
    async function fetch(){
      const brandsList = await retrieveBrands()
      setBrands(brandsList)
    }
    fetch()
    
  },[])
  //selectbox usestate
  const [categoryselect, setCategoryselect] = React.useState('');
  //sliderbar usestate
  const [price, setPrice] = React.useState([0, 9999]);
  const handleSelect = (event, newValue) => {
    setCategoryselect(event.target.value);
  };
  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };
  const classes = useStyles();
  return (  
    <div className={classes.body}>
    <div className={classes.filter}>
    <Box sx={{ width: 150 ,marginTop:'10px',marginLeft:'50px' }}>

    <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Categories</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={categoryselect}
        label="categories"
        onChange={handleSelect}>
      {categories.map((category)=>
        <MenuItem value={category.name}>{category.name}</MenuItem>)}
    </Select>
  </FormControl>
    </Box>
    
    <Box sx={{ width: 250 ,marginTop:'50px',marginLeft:'10px',maxHeight:300,overflow:'auto' }} >
      <span>Marque</span>
    <FormGroup>
    {brands.map((brand)=>
      <FormControlLabel control={<Checkbox/>} label={brand.name} />
    )}
    </FormGroup>
    </Box>
    <Box sx={{ width: 250 ,marginTop:'50px',marginLeft:'10px' }}>
      <span>Prix</span>
      <Slider
        getAriaLabel={() => 'Product Price'}
        value={price}
        min={1}
        max={9999}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </Box>
    <Button fullWidth style={{marginTop:'20px'}} color='primary' variant='contained'>Apply</Button>
    </div>
    <div className={classes.productlist}>
    <Products filterText={filterText}/>
    </div>
    </div>
  )
}

export default Store