import React from "react";
import { Lamp } from "./ui/Lamp";
import { HoverEffect } from "./ui/CardHover";

export const services = [
  {
    title: "Web Development",
    description: "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Mobile App Development",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Digital Marketing",
    description: "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Content Creation",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Branding & Identity",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "UI/UX Design",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="pb-20 lg:pb-30 max-w-7xl mx-auto">
        <div>
          <Lamp mainText="Elevating every dimension of your" gradientText="digital world" />
        </div>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={services} />
        </div>
      </div>
    </section>
  );
};

export default About;
