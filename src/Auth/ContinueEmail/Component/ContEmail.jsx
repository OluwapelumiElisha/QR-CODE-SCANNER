import { useState } from "react";
import logo from "/src/assets/20240901_220956.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContEmail = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `"Welcome to Christ Authority Bible Church's QR Code Verification System." 
  This platform is designed for officials to efficiently manage and track distributions 
  to our members. Thank you for utilizing this system! This QR code verification process 
  helps ensure resources reach everyone as arranged. Please scan the QR code presented 
  by the recipient to confirm receipt of items.`;

  const shortText = `"Welcome to Christ Authority Bible Church's QR Code Verification System." 
  This platform is designed for officials to efficiently manage and track distributions...`;

  return (
    <div className="bg-customColor h-screen flex flex-col justify-center items-center overflow-auto">
      {/* Logo Section */}
      <div className="flex justify-center items-center">
        <img className="w-60 lg:pt-64 md:pt-64 sm:pt-48 pt-32" src={logo} alt="Logo" />
      </div>

      {/* Text Section */}
      <h3 className="text-white lg:text-2xl md:text-2xl text-2xl font-pextrabold text-center">
        Christ Authority Bible Church
      </h3>

      <div className="text-center text-white pt-10 flex justify-center font-light w-full max-w-3xl mx-auto">
        <p></p>
      </div>
      <div className="flex items-center justify-center  px-6">
        <p className="text-center text-white pt-6 font-light w-full max-w-3xl">
          {isExpanded ? fullText : shortText}
          <span
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-500 cursor-pointer ml-2"
          >
            {isExpanded ? "Show Less" : "Read More"}
          </span>
        </p>
      </div>

      {/* Button Section */}
      <div className="flex justify-center items-center w-full">
        <Link to={"Login"}>
          <Button className="hover:bg-slate-100 text-black mt-9 bg-customYellow w-auto px-6 py-3 flex justify-center items-center">
            Continue With Email{" "}
          </Button>
        </Link>
      </div>
      <div className="flex items-center justify-center mt-20">
        <p className="opacity-0 mt-12 text-black text-xl">Loading...</p>
      </div>
    </div>
  );
};

export default ContEmail;
