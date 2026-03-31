
const ProductCard = ({product,cart, setCart}) => {
    const {name, description, price, period, tag, tagType, features, icon} = product
    
    const badge = (tagType) => {
        if (tagType === "popular") {
            return "badge-warning"
        } else if(tagType === "best") {
            return "badge-primary"
        } else {
            return "badge-success"
        }
    }

    const isInCart = () => {
        return cart.some(item => item.id === product.id)
    }
    
    return (
        <div>
            <div className="card bg-base-100 shadow-sm border border-gray-100">
                <div className="card-body">
                    <span className={`badge ${badge(tagType)} badge-soft ml-auto rounded-full`}>{tag}</span>
                    <span className="w-15 h-15 p-4 border rounded-full border-gray-200">                           
                        <img src={`/src/assets/products/${icon}.png`} alt="design tool"/>
                    </span>

                    <div className="">
                        <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
                        <p className="text-gray-500">{description}</p>
                        <span className="text-2xl text-gray-900">${price}<span className="text-lg text-gray-500">/{period}</span> </span>
                    </div>

                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        {features.map((f, i) => (
                            <li key={i}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{f}</span>
                        </li>
                        ))}
                    </ul>
                    
                    <div className="mt-6">
                        <button
                            className={`btn btn-primary btn-block font-bold rounded-full  ${isInCart() ? "btn-disabled" : "bg-linear-to-r from-indigo-600 to-purple-600 text-white"}`}
                            disabled={isInCart()}
                            onClick={() => setCart([...cart, product])}
                        >{isInCart() ? "Added to Cart" : "Buy now"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;