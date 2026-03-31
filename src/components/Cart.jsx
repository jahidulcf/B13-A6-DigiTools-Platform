
const Cart = ({cart, setCart}) => {

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const total = cart.reduce((acc, item) => acc + item.price, 0)

    return (
        <div>
            <p className="mb-5 text-2xl font-bold">Your Cart</p>
            
            { 
                (cart.length === 0) ? (
                    <p className="text-2xl font-bold text-gray-200 text-center min-h-20">Your cart is empty</p>
                ) : (
                    <div className="space-y-4">
                        {cart.map(item => (
                            <div key={item.id} className="flex gap-4 items-center p-5 bg-gray-50 border border-gray-100 rounded-2xl">
                                <div className="w-15 h-15 p-4 border rounded-full bg-white border-gray-100">                           
                                    <img src={`/src/assets/products/${item.icon}.png`} alt={item.name} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-gray-900">{item.name}</p>
                                    <p className="text-gray-500">${item.price}</p>
                                </div>
                                <button 
                                    className="btn btn-ghost rounded-full text-red-500"
                                    onClick={() => removeFromCart(item.id)}
                                >Remove</button>
                            </div>
                        ))}
                        <div className="flex justify-between items-center mt-4">
                            <p>Total: </p>
                            <p className="text-2xl font-bold">${total}</p>
                        </div>
                        <button className="btn rounded-full btn-block bg-linear-to-r from-indigo-600 to-purple-600 text-white">Proceed to Checkout</button>
                    </div>
                )
            }
        </div>
    );
};

export default Cart;