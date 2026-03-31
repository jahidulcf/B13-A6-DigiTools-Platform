
const Steps = () => {
    return (
        <div className="my-30 space-y-10 container mx-auto">
            <div className="flex flex-col items-center text-center gap-4">
                <h2 className="text-3xl font-extrabold text-gray-900 md:text-5xl">Get Started in 3 Steps</h2>
                <p className="text-gray-500">Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className="grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
                <div className="card h-95 bg-base-100 shadow-sm border border-gray-100 p-6 space-y-4 items-center text-center justify-center">
                    <span className="absolute text-sm font-bold top-4 right-4 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white w-10 h-10 flex justify-center items-center">01</span>
                    <div className="w-25 h-25 bg-purple-100 rounded-full flex justify-center items-center">
                        <img src={'/src/assets/user.png'} alt="step-1"/>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
                    <p className="text-gray-500">Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className="card h-95 bg-base-100 shadow-sm border border-gray-100 p-6 space-y-4 items-center text-center justify-center">
                    <span className="absolute text-sm font-bold top-4 right-4 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white w-10 h-10 flex justify-center items-center">02</span>
                    <div className="w-25 h-25 bg-purple-100 rounded-full flex justify-center items-center">
                        <img src={'/src/assets/package.png'} alt="step-1"/>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Choose Products</h2>
                    <p className="text-gray-500">Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className="card h-95 bg-base-100 shadow-sm border border-gray-100 p-6 space-y-4 items-center text-center justify-center">        
                    <span className="absolute text-sm font-bold top-4 right-4 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white w-10 h-10 flex justify-center items-center">03</span>
                    <div className="w-25 h-25 bg-purple-100 rounded-full flex justify-center items-center">
                        <img src={'/src/assets/rocket.png'} alt="step-1"/>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Start Creating</h2>
                    <p className="text-gray-500">Download and start using your premium tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default Steps;