import React, { useRef } from "react";
import { chipImg } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";

import ReactGA from "react-ga4";

const trackButtonClick = () => {
  ReactGA.event({
    category: "User",
    action: "Feedback Form",
    label: "User Feedback",
  });
};

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding flex flex-col items-center">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center text-center">
          <h3 className="hiw-title">
            The Intelligence of AI
            <br /> The Authenticity of Humans.
          </h3>

          <p className="hiw-subtitle">
            Let us know your suggestions, Won't Take Much Of Your Time.
          </p>
        </div>

        {/* Centering the button */}
        <div className="w-full flex justify-center mt-10">
          <div className="relative inline-flex group">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <button
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              onClick={() => {
                trackButtonClick();
                window.open(
                  "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__UTeIFlUOU1BT1QxVFJQUE81RzhDMjhDRU9QMzhYVy4u",
                  "_blank"
                );
              }}
            >
              Feedback Form
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
