import { IFAQ } from "@/components/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `What does ${siteDetails.siteName} do exactly?`,
    answer:
      "NovexPower develops advanced battery-powered electric ground power units (eGPUs) that replace diesel generators at airports. By combining innovative immersion-cooled battery technology with smart power solutions, we help airports reduce emissions, lower operating costs, and transition toward cleaner, more sustainable ground operations.",
  },
  {
    question: `Why ${siteDetails.siteName} ?`,
    answer:
      "We focus on meeting our customers’ specific needs, by delivering battery packs tailored to their unique design requirements, not just generic off-the-shelf solutions. Operating in the North European market, we offer short lead times and a highly responsive service. Our business is built from the ground up to be flexible and scalable, allowing us to adapt quickly and efficiently to varying customer demands. Thanks to our innovative production concept, we can ensure fast delivery, exceptional safety, and high performance, all while maintaining cost-effectiveness.",
  },
  {
    question: `What makes the ${siteDetails.siteName} eGPU unique?`,
    answer:
      "Our eGPUs are powered by advanced immersion-cooled battery technology, designed to deliver reliable, high-performance ground power in all weather conditions. Our innovative thermal management system keeps batteries cool during high-power charging and discharging, while also warming them in harsh winter conditions to maintain their optimal operating temperature.      npm run dev",
  },
  {
    question: "Is immersion cooling safe and effective?",
    answer: `Yes, immersion cooling, particularly with Novec is a well-established and reliable method for managing high-performance battery packs. Novec is a non-toxic, fire-suppressing liquid that poses no threat to the ozone layer and has zero global warming potential, making it both safe and environmentally responsible.`,
  },
];
