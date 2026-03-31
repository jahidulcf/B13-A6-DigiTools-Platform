import { use, useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

const DigitalTools = ({productPromise, cart, setCart}) => {
    const products = use(productPromise)
    const [tab, setTab] = useState("products")

    const selected = "btn rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white"

    return (
        <div className="my-30 space-y-10 container mx-auto">
            <div className="flex flex-col items-center text-center gap-4">
                <h2 className="text-3xl font-extrabold text-gray-900 md:text-5xl">Premium Digital Tools</h2>
                <p className="text-gray-500">Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
            </div>

            <div className="tabs justify-center">
                <input 
                    type="radio" 
                    name="my_tabs_6" 
                    className={`tab ${tab === "products" ? selected : ""}`}
                    aria-label="Products" 
                    onClick={() => setTab("products")}
                    defaultChecked />

                <div className="tab-content mt-6">
                    <div className="grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
                        {products.map(product=> (
                            <ProductCard key={product.id} product={product} cart={cart} setCart={setCart}/>
                        ))}
                    </div>
                </div>
                
                <input 
                    type="radio" 
                    name="my_tabs_6" 
                    className={`tab ${tab === "cart" ? selected : ""}`}
                    onClick={() => setTab("cart")}
                    aria-label={`Cart(${cart.length})`} />

                <div className="tab-content bg-base-100 border-base-300 mt-6 p-6">
                    <Cart cart={cart} setCart={setCart} />
                </div>
            </div>
        </div>
    );
};

export default DigitalTools;