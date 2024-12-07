import Hero from "@/components/hero";
import homeImg from '/public/scale.jpg';

export default function ScalePage() {
  return (
   <Hero 
    imgData={homeImg} 
    imgAlt="A view of the Steel Factory" 
    title="Scale Your App to Infinity" />
  );
};