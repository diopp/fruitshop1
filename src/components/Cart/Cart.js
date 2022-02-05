

function Cart(props) {
    const fullCart = props.cart.map(cartItem => (
        <tr>
            <td><img src={cartItem.image} alt="" style={{height: '50px'}}/></td>
            <td>{cartItem.name}</td>
            <td>${cartItem.price}</td>
            <td>{cartItem.category}</td>
            <hr />
        </tr>
    ))

    return (
        <div className="cartContainer">
            <table className='table'>
                <thead>
                    <tr>
                        <th>Item Image</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {fullCart}
                </tbody>
            </table>
        </div>
    )
}

export default Cart; 



