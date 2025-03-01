import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import VideoCarousel from "./VideoCarousel";
import one from "/assets/videos/one.mp4";
import two from "/assets/videos/two.mp4";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Our Top Insights.
          </h1>
        </div>
        <VideoCarousel />
        <div className="w-full p-4">
          <div className="flex w-full">
            {/* Box 1 */}
            <div className="w-1/2 bg-gray-300 p-4 text-center border flex flex-col items-center">
              <span>Genric Writing Style</span>
              <div className="w-full aspect-square mt-2">
                <video
                  className="w-full h-full object-cover rounded-lg"
                  controls
                >
                  <source src={two} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Box 2 */}
            <div className="w-1/2 bg-gray-400 p-4 text-center border flex flex-col items-center">
              <span>PostGennie: Humanly Writing Style</span>
              <div className="w-full aspect-square mt-2">
                <video
                  className="w-full h-full object-cover rounded-lg"
                  controls
                >
                  <source src={one} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
