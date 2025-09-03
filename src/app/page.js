import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Image from "next/image";
import Portfolio from "./portfolio/page";
import StatsTestimonials from "@/components/StatsTestimonials";
import AboutTeam from "@/components/AboutTeam";
import ContactCTA from "@/components/ContactCTA";
import Pricing from "@/components/Pricing";
import VideoSection from "@/components/VideoSection";
import HomePortfolio from "@/components/HomePortfolio";
import ProjectForm from "@/components/ProjectForm";

export default function Home() {
  return (
   <div>
     <Hero />
     <Services />
     <HomePortfolio />
     <StatsTestimonials />
     {/* <VideoSection /> */}
     <Pricing />
     <AboutTeam />
     {/* <ContactCTA /> */}
     <ProjectForm />
   </div>
  );
}
