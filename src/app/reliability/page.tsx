import Hero from "@/components/hero";
import reliabilityImg from '/public/reliability.jpg';

export default function ReliabilityPage() {
  return (
   <Hero 
    imgData={reliabilityImg} 
    imgAlt="A close-up of a person welding" 
    title="No Downtime Hosting" />
  );
};