import Hero from "@/components/hero";
import homeImg from '/public/home.jpg';

export default function Home() {
  return (
   <Hero 
    imgData={homeImg} 
    imgAlt="A Top down view of the assembly Line of the Car Factory" 
    title="Professional Cloud Hosting" />
  );
};