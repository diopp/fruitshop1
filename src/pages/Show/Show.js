
function Show(props) {
    const id = props.match.params.id
    const product = props.product
    const products = product.find((p) => p._id === id)
    

   


    return (

      
      
      <div className="container px-5 py-24 mx-auto">

<h1>{products.name}</h1>

      <div className="lg:w-4/5 mx-auto flex flex-wrap">
       
      
        <img src={products.image} alt={products.name} />

        <button className='bg-green-500  text-white font-bold py-2 px-4 rounded' onClick={(evt) => props.addToCart(evt, products)}>Add  </button>

      </div>
      </div>
    )
  }
  
  export default Show