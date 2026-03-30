import bgImage from "../../assets/banner.png";
import circle from "../../assets/purpleDot.png";
import playButton from "../../assets/Play.png";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 px-4 py-8">


      <div className="flex flex-col justify-center space-y-3 text-center md:text-left items-center md:items-start">

        <div className="bg-[#E1E7FF] flex gap-2 w-fit md:w-2/6 rounded-2xl px-2 py-1">
          <img src={circle} alt="circle Image" />
          <p className="text-[#9514FA] text-sm">New: AI-Powered Tools Available</p>
        </div>

        <div>
          <h1 className="text-4xl md:text-6xl font-bold">
            Supercharge Your<br />Digital Workflow
          </h1>
        </div>

        <div>
          <p className="text-sm md:text-base">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="btn btn-primary text-white rounded-2xl">
            Explore Products
          </button>
          <button className="flex gap-2 btn btn-primary text-[#9514FA] bg-transparent rounded-2xl">
            <img src={playButton} alt="Play Button" />
            <p>Watch Demo</p>
          </button>
        </div>

      </div>

     
      <div className="flex items-center justify-center">
        <img src={bgImage} alt="hero Image" className="w-full max-w-md md:max-w-full" />
      </div>

    </div>
  );
};

export default Hero;