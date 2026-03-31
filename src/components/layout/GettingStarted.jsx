import userLogo from "../../assets/user.png";
import packageLogo from "../../assets/package.png";
import rocket from "../../assets/rocket.png";
import GettingStartedCard from "./GettingStartedCard";

const cardData = [
    {
        id: 1,
        title: "Create Account",
        description: "Sign up for free in seconds. No credit card required to get started.",
        logo: userLogo
    },
    {
        id: 2,
        title: "Choose Products",
        description: "Browse our catalog and select the tools that fit your needs.",
        logo: packageLogo
    },
    {
        id: 3,
        title: "Start Creating",
        description: "Download and start using your premium tools immediately.",
        logo: rocket
    }
];

const GettingStarted = () => {
    return (
        <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                        Get Started In 3 Steps
                    </h1>
                    <p className="mt-3 text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {cardData.map((card) => (
                        <GettingStartedCard key={card.id} card={card} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default GettingStarted;