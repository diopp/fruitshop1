import {Route, Switch } from 'react-router-dom';
import Home from '../pages/HomePage/Home';
import Show from '../pages/Show/Show';
import Cart from '../components/Cart/Cart'
import Admin from '../pages/Admin/admin';
import AddProduct from '../pages/Admin/AddProducts';







function Main(props) {
    
    


  
      

    return (
        <main>
        
           
                      <Switch>
                <Route exact path='/'>
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
  
                    <Home product={props.product}  cart ={props.cart} addToCart={props.addToCart} />

                    </div>
                    </div>
                    </Route>

                <Route exact path='/admin'>
                    <Admin  
                    deleteProduct={props.deleteProduct}
                    
                    
                    
                    />
                    
                </Route>



                <Route  path="/product/:id" render = {(rp) => <Show product={props.product} {...rp} cart ={props.cart} addToCart={props.addToCart} /> } />
               
                
                <Route exact path='/cart'>
                   <Cart cart = {props.cart} />
                    
                </Route>

                <Route exact path='/addProduct'>
                    <AddProduct handleSubmit={props.handleSubmit} handleChange={props.handleChange} name={props.name} product={props.product}  />  
        
                    
                    
                    
               
                    
                </Route>



            </Switch>
        </main>
    )
}

export default Main;