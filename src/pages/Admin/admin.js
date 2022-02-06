import { useState, useEffect } from "react";
import "../Admin/Admin.scss";
import React from "react";


export default function Admin(props) {
    const [state, setState] = useState({

        products: [{ name: "", price: "", image: "", quantity: "", category:""}],
        name: "",
        price:"" ,
        image: "",
        quantity: "",
        category:"",

      
      });


    async function getData() {
        const response = await fetch(
            "https://ancient-temple-17931.herokuapp.com/https://backend-fruit.herokuapp.com/api/fruits"
          );
          const data = await response.json();
          setState({
            products: data,
        
          });
        }


        function handleChange(evt ) {
            setState({ ...state, [evt.target.name]: evt.target.value });
          }

        

          async function handleSubmit( evt) {
            evt.preventDefault();
        
            const newProduct = {
              name: state.name,
              price: state.price,
              image: state.image,
              quantity: state.quantity,
              category: state.category
            };


        
            await fetch("https://ancient-temple-17931.herokuapp.com/https://backend-fruit.herokuapp.com/api/fruits", {
              method: "POST",
              headers: {
                "Content-type": "Application/json"
              },
              body: JSON.stringify(newProduct)
            });
        
            getData();
          }
      
        

          useEffect(() => {
            getData();
          }, []);
        
          

    return(

        <section>

         
     

     <hr />
        <h2> </h2>
        
 
            
        <div className="w-2/3 mx-auto">
        <hr />
        <hr />
        
     
  <div className="bg-white shadow-md rounded my-6">
 
    <table className="text-left w-full border-collapse"> 
      <thead>
        <tr>
          <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Products</th>
          <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Name</th>
          <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Price</th>
          <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Quantity</th>
          <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Category</th>
          <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Actions</th>

        </tr>
      </thead>
      <tbody>
      {state.products.map((s) => (
                  <tr key={s.name}>
           <img className="h-20 w-20 " src={s.image} alt="" />
          <td className="py-4 px-6 border-b border-grey-light">{s.name}</td>
          <td className="py-4 px-6 border-b border-grey-light">${s.price}</td>
          <td className="py-4 px-6 border-b border-grey-light">{s.quantity}</td>
          <td className="py-4 px-6 border-b border-grey-light">{s.category}</td>
          <td>
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Edit
</button>
<button  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Delete{s.id}
</button>



            </td>
        </tr>
      ))}
      </tbody>
    </table>
  </div>
</div>







        
        <hr />

        



















































        <form onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input name="name" value={state.name} onChange={handleChange} />
          </label>
          <label>
            <span>Price</span>
            <input name="price" value={state.price} onChange={handleChange} />
          </label>


          <label>
            <span>Quantity</span>
            <input name="quantity" value={state.quantity} onChange={handleChange} />
          </label>


          <label>
            <span>Category</span>
            <input name="category" value={state.category} onChange={handleChange} />
          </label>

        

          <label>
            <span>Image</span>
            <input  name="image" value={state.image} onChange={handleChange} />
          </label>




        

       



          <button className='bg-green-500  text-white font-bold py-2 px-4 rounded'>ADD SKILL</button>
        </form>
      </section>












    )
}

