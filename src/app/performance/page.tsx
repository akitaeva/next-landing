import Hero from "@/components/hero";
import performanceImg from '/public/performance.jpg';


export default function PerformancePage() {
  return (
   <Hero 
    imgData={performanceImg} 
    imgAlt="A close up of metal sheet being cut in the assembly line" 
    title="Serving High Performance Applications" />
  );
};