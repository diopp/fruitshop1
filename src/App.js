import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main';
import {useState, useEffect} from 'react';






function App() {

  const [cart, setCart] = useState([]);
  const[product, setProduct] = useState(null)

  const getProduct = async () => {
    const response = await fetch('https://ancient-temple-17931.herokuapp.com/https://backend-fruit.herokuapp.com/api/fruits')
    const data = await response.json()
    setProduct(data)
   
}



  useEffect(() => {


  
    console.log('Running')
    getProduct('Banana')}, [])

  const addToCart = (evt, product) => {
    evt.preventDefault()
    console.log(cart, "Before" )
      setCart([...cart, product])

      
      console.log(cart, "After")
  }


  return (
    <div className="App">

     
      <Navbar cart = {cart} />
 
    
    
      <Main cart = {cart} 
            addToCart = {addToCart} 
            product={product} />

    

      
      
     
    </div>
  );
}

export default App;
