
const Workflow = () => {
    return (
        <div className="bg-linear-to-r from-indigo-600 to-purple-600 text-white py-30 space-y-10 text-center">
            <div className="flex flex-col items-center text-center gap-4">
                <h2 className="text-5xl font-extrabold">Ready to Transform Your Workflow?</h2>
                <p className="">Join thousands of professionals who are already using Digitools to work smarter.<br />Start your free trial today.</p>
            </div>

            <div className="space-y-4">
                <div className="flex justify-center gap-2">
                    <button className="btn bg-white font-bold rounded-full" href="#">
                        <span className="w-full bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Watch Demo</span>
                    </button>

                    <button className="btn btn-outline font-bold rounded-full" href="#">Get Started</button>
                </div>
                <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Workflow;