import { useEffect } from "react";
import ReactGA from "react-ga4";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

import * as Sentry from "@sentry/react";

// Replace with your actual GA4 Measurement ID
const TRACKING_ID = "G-8PSNRLQ8HV"; 
ReactGA.initialize(TRACKING_ID);

const App = () => {
  useEffect(() => {
    ReactGA.send("pageview"); // Tracks page views
  }, []);

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      {/* <Model /> */}
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
