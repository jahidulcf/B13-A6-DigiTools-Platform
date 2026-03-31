
const DigitalTools = () => {
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


            {/* Tools cards goes here */}
            <div className="grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
                <div className="card bg-base-100 shadow-sm border border-gray-100">
                    <div className="card-body">
                        <span className="badge badge-warning badge-soft ml-auto rounded-full">Most Popular</span>
                        <span className="w-15 h-15 p-4 border rounded-full border-gray-200">                           
                            <img src={'/src/assets/products/design-tool.png'} alt="design tool"/>
                        </span>

                        <div className="">
                            <h2 className="text-2xl font-bold text-gray-900">AI Writing Pro</h2>
                            <p className="text-gray-500">Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                            <span className="text-2xl text-gray-900">$29<span className="text-lg text-gray-500">/Mo</span> </span>
                        </div>

                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>High-resolution image generation</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Customizable style templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Batch processing capabilities</span>
                            </li>
                        </ul>
                        
                        <div className="mt-6">
                            <button className="btn btn-primary btn-block font-bold rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white">Buy now</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-sm border border-gray-100">
                    <div className="card-body">
                        <span className="badge badge-warning badge-soft ml-auto rounded-full">Most Popular</span>
                        <span className="w-15 h-15 p-4 border rounded-full border-gray-200">                           
                            <img src={'/src/assets/products/design-tool.png'} alt="design tool"/>
                        </span>

                        <div className="">
                            <h2 className="text-2xl font-bold text-gray-900">AI Writing Pro</h2>
                            <p className="text-gray-500">Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                            <span className="text-2xl text-gray-900">$29<span className="text-lg text-gray-500">/Mo</span> </span>
                        </div>

                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>High-resolution image generation</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Customizable style templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Batch processing capabilities</span>
                            </li>
                        </ul>
                        
                        <div className="mt-6">
                            <button className="btn btn-primary btn-block font-bold rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white">Buy now</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-sm border border-gray-100">
                    <div className="card-body">
                        <span className="badge badge-warning badge-soft ml-auto rounded-full">Most Popular</span>
                        <span className="w-15 h-15 p-4 border rounded-full border-gray-200">                           
                            <img src={'/src/assets/products/design-tool.png'} alt="design tool"/>
                        </span>

                        <div className="">
                            <h2 className="text-2xl font-bold text-gray-900">AI Writing Pro</h2>
                            <p className="text-gray-500">Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                            <span className="text-2xl text-gray-900">$29<span className="text-lg text-gray-500">/Mo</span> </span>
                        </div>

                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>High-resolution image generation</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Customizable style templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Batch processing capabilities</span>
                            </li>
                        </ul>
                        
                        <div className="mt-6">
                            <button className="btn btn-primary btn-block font-bold rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white">Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalTools;