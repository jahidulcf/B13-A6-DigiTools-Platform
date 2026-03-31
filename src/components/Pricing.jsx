
const Pricing = () => {
    return (
        <div className="my-30 space-y-10 container mx-auto">
            <div className="flex flex-col items-center text-center gap-4">
                <h2 className="text-5xl font-extrabold text-gray-900">Simple, Transparent Pricing</h2>
                <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className="grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">

                <div className="card h-112 bg-base-100 shadow-sm border border-gray-100">
                    <div className="card-body">
                        <div className="">
                            <h2 className="text-2xl font-bold text-gray-900">Starter</h2>
                            <p className="text-gray-500">Perfect for getting started</p>
                            <span className="text-2xl text-gray-900">$0<span className="text-lg text-gray-500">/Month</span> </span>
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
                        
                        <div className="mt-auto">
                            <button className="btn btn-primary btn-block font-bold rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white">Buy now</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-sm border border-gray-100 bg-linear-to-r from-indigo-600 to-purple-600 text-white">
                    <div className="card-body">
                        <div className="">
                            <h2 className="text-2xl font-bold">Pro</h2>
                            <p className="">Best for professionals</p>
                            <span className="text-2xl">$29<span className="text-lg">/Month</span> </span>
                        </div>

                        <ul className="mt-6 flex flex-col gap-2 text-xs ">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>High-resolution image generation</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Customizable style templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Batch processing capabilities</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Customizable style templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Batch processing capabilities</span>
                            </li>
                        </ul>
                        
                        <div className="mt-auto">
                            <button className="btn btn-outline bg-white font-bold w-full p-px rounded-full" href="#">
                                <div className="w-full rounded-full">
                                    <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Watch Demo</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-sm border border-gray-100">
                    <div className="card-body">
                        <div className="">
                            <h2 className="text-2xl font-bold text-gray-900">Enterprise</h2>
                            <p className="text-gray-500">For teams and businesses</p>
                            <span className="text-2xl text-gray-900">$99<span className="text-lg text-gray-500">/Month</span> </span>
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
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Customizable style templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Batch processing capabilities</span>
                            </li>
                        </ul>
                        
                        <div className="mt-auto">
                            <button className="btn btn-primary btn-block font-bold rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white">Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;