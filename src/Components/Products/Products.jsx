import React,{useEffect,useState} from 'react'
//importing Grid from material UI to organize the cards
import { Grid,} from '@material-ui/core'
// import Pagination from '@mui/material/Pagination';
//importing Product the card design 
import { Product } from './Product/Product'
//importing Styles 
import useStyles from './Styles'



 const Products = ({filterText}) => {
     const [listProduct, setListProduct] = useState([])
     const [listProductConst, setListProductConst] = useState([])
//      const [page, setPage] = React.useState(0);
//      const [rowsPerPage, setRowsPerPage] = React.useState(10);

//      const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//     };
//     const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

     useEffect(()=>{
    fetch("http://localhost:4000/products").then((res)=>{
        return res.json()
    }).then(res => {
        setListProduct(res)
        setListProductConst(res)
    })
},[])
    const classes = useStyles();
   
    useEffect(()=>{

 setListProduct(listProductConst.filter(prod => {
  if (filterText === "") {
    //if filterText is empty
    return prod;
  } else if (prod.name.toLowerCase().includes(filterText.toLowerCase())) {
    //returns filtered array
    return prod;
  }
}))
console.log(filterText)
    },[filterText,listProductConst])
  return (
    
<main className={classes.content}>
        <Grid container justify="center" spacing={2} className={classes.toolbar}>
            {listProduct.map((product)=>(
                <Grid item key={product.ref} xs={7} sm={6} md={5} lg={4}>
                    <Product product={product}  />
                </Grid>
            ))}
        </Grid>
    </main>
    
  )
}
export default Products;