import { Link } from 'react-router-dom';


function Home(props) {


 

 

  const loaded = () => {
       return( 
            
            props.product.map( product => (
           <div key={product._id}  >
                <Link to={`product/${product._id}`} className='group' >
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                       <img src={product.image} alt={product.name} className='w-full h-full object-center object-cover group-hover:opacity-75' />
                     
                       
                      
                       
            </div>  
                       <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                       <p className="mt-1 text-lg font-medium text-gray-900"> ${product.price}</p>
                       
                </Link>
                <button className='bg-green-500  text-white font-bold py-2 px-4 rounded' onClick={(evt) => props.addToCart(evt, product)}>Add Cart </button>

               
                
            </div>
            

         
                       
        )))
    
    }





    const loading = () => {
        return <h1>q</h1>
    }

    return (props.product ? loaded() : loading()
                
    
    
    )
}


export default Home;