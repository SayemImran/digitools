import PricingCard from "./PricingCard";

const plans = [
    {
        id: 1,
        name: "Starter",
        tagline: "Perfect for getting started",
        price: 0,
        buttonText: "Get Started Free",
        popular: false,
        features: [
            "Access to 10 free tools",
            "Basic templates",
            "Community support",
            "1 project per month",
        ],
    },
    {
        id: 2,
        name: "Pro",
        tagline: "Best for professionals",
        price: 29,
        buttonText: "Start Pro Trial",
        popular: true,
        features: [
            "Access to all premium tools",
            "Unlimited templates",
            "Priority support",
            "Unlimited projects",
            "Cloud sync",
            "Advanced analytics",
        ],
    },
    {
        id: 3,
        name: "Enterprise",
        tagline: "For teams and businesses",
        price: 99,
        buttonText: "Contact Sales",
        popular: false,
        features: [
            "Everything in Pro",
            "Team collaboration",
            "Custom integrations",
            "Dedicated support",
            "SLA guarantee",
            "Custom branding",
        ],
    },
];




const Pricing = () => {
    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="mt-4 text-gray-500 text-base sm:text-lg">
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
                    {plans.map((plan) => (
                        <PricingCard key={plan.id} plan={plan} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Pricing;