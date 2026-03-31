
const Stat = () => {
    return (
        <div className="bg-linear-to-r from-indigo-600 to-purple-600">
            <div className="flex container mx-auto justify-between py-16 text-center text-white">
                <div className="flex-1">
                    <p className="text-2xl font-extrabold md:text-6xl">50K+</p>
                    <p className="text-l md:text-2xl">Active Users</p>
                </div>
                <div className="flex-1">
                    <p className="text-2xl font-extrabold md:text-6xl">200+</p>
                    <p className="text-l">Premium Tools</p>
                </div>
                <div className="flex-1">
                    <p className="text-2xl font-extrabold md:text-6xl">4.9</p>
                    <p className="text-l">Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stat;