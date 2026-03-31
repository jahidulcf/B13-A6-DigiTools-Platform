
const Hero = () => {
    return (
        <div className="hero py-16 container mx-auto">
            <div className="hero-content flex-col lg:flex-row gap-15">
                <div>
                    <h1 className="text-4xl font-bold test-gray-900 md:text-7xl">Super charge your digital workflow</h1>
                    <p className="text-lg py-6 text-gray-500">
                        Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.<br/>Explore Products
                    </p>
                    <div className="space-x-4">
                        <a className="btn text-white rounded-full bg-linear-to-r from-indigo-600 to-purple-600 border border-transparent" href="#">Explore Products</a>
                        <button className="p-px rounded-full bg-linear-to-r from-indigo-600 to-purple-600" href="#">
                            <div className="btn bg-white rounded-full">
                                <img src={'/src/assets/play.png'} alt="play icon"/>
                                <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Watch Demo</span>
                            </div>
                        </button>
                    </div>
                </div>
                <img
                src={'/src/assets/banner.png'}
                className="rounded-lg shadow-2xl"
                />
            </div>
        </div>
    );
};

export default Hero;