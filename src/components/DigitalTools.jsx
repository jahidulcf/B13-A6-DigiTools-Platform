import { use } from "react";
import ProductCard from "./ProductCard";

const DigitalTools = ({productPromise}) => {
    const products = use(productPromise)
    
    return (
        <div className="my-30 space-y-10 container mx-auto">
            <div className="flex flex-col items-center text-center gap-4">
                <h2 className="text-5xl font-extrabold text-gray-900">Premium Digital Tools</h2>
                <p className="text-gray-500">Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
                <div className="flex space-x-4">
                    <button className="btn rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white">Products</button>
                    <button>Cart(<span>0</span>)</button>
                </div>
            </div>


            {/* Product cards goes here */}
            <div className="grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
                {products.map(product=> (
                    <ProductCard product={product}/>
                ))}
            </div>
        </div>
    );
};

export default DigitalTools;