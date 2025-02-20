import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateWithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import gsap from "gsap";

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    animateWithGsap("#features_title", { y: 0, opacity: 1 });
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-wdith">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore our models.
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">PostGeniie</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              An AI with Human Touch.
            </h2>
          </div>

          <div class="pt-5 bg-gray-900" id="pricing">
            <div class="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
              <div class="mx-auto max-w-4xl text-center">
                <h1 class="text-base font-semibold leading-7 text-indigo-400">
                  Pricing
                </h1>
                <p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Whether it's just you, or your entire team - we've got you
                  covered.
                </p>
              </div>
              <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-white">
                Choose the model that works best
              </p>
              <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {/* <!-- First Product --> */}
                <div class="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
                  <div class="flex items-center justify-between gap-x-4">
                    <h2
                      id="product1"
                      class="text-lg font-semibold leading-8 text-white"
                    >
                      M0 Basic
                    </h2>
                  </div>
                  {/* <p class="mt-4 text-sm leading-6 text-white">Product details for Product Type 1</p> */}
                  <p class="mt-6 flex items-baseline gap-x-1">
                    <span class="text-4xl font-bold tracking-tight text-white">
                      $0 per month
                    </span>
                    <span class="text-sm font-semibold leading-6 text-gray-300"></span>
                  </p>
                  <a
                    href="/order"
                    aria-describedby="product1"
                    class="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Coming Soon
                  </a>
                  <ul
                    role="list"
                    class="mt-8 space-y-3 text-sm leading-6 text-white xl:mt-10"
                  >
                    <li class="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        class="h-6 w-5 flex-none text-white"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      4 Premium Posts
                    </li>
                    <li class="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        class="h-6 w-5 flex-none text-white"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Uses 1 trained Model
                    </li>
                    <li class="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        class="h-6 w-5 flex-none text-white"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Followed by Unlimited posts
                    </li>
                  </ul>
                </div>

                {/* <!-- Second Product --> */}
                <div class="bg-white/5 ring-2 ring-indigo-500 rounded-3xl p-8 xl:p-10">
                  <div class="flex items-baseline justify-between gap-x-4">
                    <h2
                      id="product2"
                      class="text-lg font-semibold leading-8 text-white"
                    >
                      M1 Pro
                    </h2>
                    <p class="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                      Most popular
                    </p>
                  </div>

                  <p class="mt-6 flex items-baseline gap-x-1">
                    <span class="text-4xl font-bold tracking-tight text-white">
                      $6 per month
                    </span>
                    <span class="text-sm font-semibold leading-6 text-gray-300"></span>
                  </p>
                  <a
                    href=""
                    aria-describedby="product2"
                    class="bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Coming Soon
                  </a>
                  <ul
                    role="list"
                    class="mt-8 space-y-3 text-sm leading-6 text-white xl:mt-10"
                  >
                    <li class="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        class="h-6 w-5 flex-none text-white"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      15+ Premium posts
                    </li>
                    <li class="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        class="h-6 w-5 flex-none text-white"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Uses 3 Trained Model
                    </li>
                    <li class="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        class="h-6 w-5 flex-none text-white"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      All from M0
                    </li>
                  </ul>
                </div>

                {/* <!-- Third Product --> */}
                <div class="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
                  <div class="flex items-center justify-between gap-x-4">
                    <h2
                      id="product3"
                      class="text-lg font-semibold leading-8 text-white"
                    >
                      M2 Business
                    </h2>
                  </div>
                  {/* <p class="mt-4 text-sm leading-6 text-white">Product details for Product Type 3</p> */}
                  <p class="mt-6 flex items-baseline gap-x-1">
                    <span class="text-4xl font-bold tracking-tight text-white">
                      $12 per month
                    </span>
                    <span class="text-sm font-semibold leading-6 text-white"></span>
                  </p>
                  <a
                    href=""
                    aria-describedby="product3"
                    class="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Coming Soon
                  </a>
                  <ul
                    role="list"
                    class="mt-8 space-y-3 text-sm leading-6 text-white xl:mt-10"
                  >
                    <li class="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        class="h-6 w-5 flex-none text-white"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      30+ Premium Posts
                    </li>
                    <li class="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        class="h-6 w-5 flex-none text-white"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Uses 4 Trained Model
                    </li>
                    <li class="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        class="h-6 w-5 flex-none text-white"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      All from M1
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
