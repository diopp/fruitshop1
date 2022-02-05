import './Navbar.scss'
import {Link} from 'react-router-dom';
function Navbar(props) {



  
  
    return (
<section className="navigation">
  <div className="nav-container">
    <div className="brand">
      <a  className="brand-name" href="/">🍏 Fruit Shops </a>

     
    </div>

 
    <nav>
 
  <div className="nav-mobile">
    <a id="nav-toggle" href="#!"><span></span></a>
    
  </div>
  <ul className="nav-list">
    

  <li>
    
      
    <Link className="cart-icon" to="/admin">Admin 

     
    
     </Link>


       
   
  
  </li>
  
    <li>
    
      
      <Link className="cart-icon" to="/cart">Cart 

        {props.cart.length}
      
       </Link>
    
    </li>

    
    {
      /*
        props.user ?

  X
    <li><button onClick={logout}>Logout  </button></li>
    :
    <li><button onClick={login}>Login   </button></li>
*/
  }
    
  
  </ul>
</nav>


    </div>
</section>
    )

}

export default Navbar

