const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-violet-700 to-purple-500 rounded-2xl mx-4 sm:mx-8 lg:mx-16 my-10">
      <div className="max-w-3xl mx-auto text-center py-16 px-6">
       
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Ready To Transform Your Workflow?
        </h2>

        <p className="mt-4 text-violet-100 text-sm sm:text-base leading-relaxed">
          Join thousands of professionals who are already using Digitools to
          work smarter. <br className="hidden sm:block" />
          Start your free trial today.
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-violet-600 font-semibold text-sm px-7 py-3 rounded-full hover:bg-violet-50 transition-colors duration-200 w-full sm:w-auto">
            Explore Products
          </button>
          <button className="border border-white text-white font-semibold text-sm px-7 py-3 rounded-full hover:bg-white/10 transition-colors duration-200 w-full sm:w-auto">
            View Pricing
          </button>
        </div>

        <p className="mt-6 text-violet-200 text-xs sm:text-sm tracking-wide">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
