import React from 'react'
//Import React Routing
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'
//Import Component
import {Navbar} from './Components'
import {Home, Store,Productdetails,ProfilePage} from './Components/Pages'

const App = () => {
  const [filterText,setFilterText] = React.useState("")
  return (
  <div className='App'>
    <Router>
  <div>
      <Navbar functionFilter = {setFilterText}/>
      
  </div>
  <div>  
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/store" > <Store filterText ={filterText}/></Route>
          <Route exact path="/productdetails/:ref" component={Productdetails}/>
          <Route exact path="/profile" component={ProfilePage}/>
      </Switch>
  </div>  
  <div>    
  </div>   
  </Router>
  </div>
  )
}

export default App