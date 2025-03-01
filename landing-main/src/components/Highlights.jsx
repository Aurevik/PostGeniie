import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import VideoCarousel from './VideoCarousel';

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 })
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
  }, [])

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">Our Top insights.</h1>
        </div>
        <VideoCarousel />
        <div class="w-full p-4">
          <div class="flex w-full">
            <div class="w-1/2 bg-gray-300 p-4 text-center border">Box 1</div>
            <div class="w-1/2 bg-gray-400 p-4 text-center border">Box 2</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights