import React from "react";
import PortfolioCard from "./ui/PortfolioCard";
import { TracingBeam } from "./ui/TracingBeam";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/Button";
import { IoIosArrowRoundForward, IoMdCheckmark } from "react-icons/io";
import { BsPlusCircleDotted } from "react-icons/bs";

const projects = [
  {
    imageSrc: "/image1.png",
    title: "digihry.sk",
    description: "Managed FB and IG Ad campaigns targeting relevant audience with average ROAS 2.7",
    link: "https://digihry.sk",
    logoSrc: "logo-digihry.png",
  },
  {
    imageSrc: "/image2.png",
    title: "butterfly-reality.sk",
    description: "Managed FB and IG Ad campaigns targeting relevant audience with average ROAS 2.7",
    link: "https://butterfly-reality.sk",
    logoSrc: "logo-br.png",
  },
  {
    imageSrc: "/image3.png",
    title: "previtalitu.sk",
    description: "Managed FB and IG Ad campaigns targeting relevant audience with average ROAS 2.7",
    link: "https://previtalitu.sk",
    logoSrc: "logo-previtalitu.webp",
  },
  {
    imageSrc: "/image4.png",
    title: "newspirit.sk",
    description: "Managed FB and IG Ad campaigns targeting relevant audience with average ROAS 2.7",
    link: "https://newspirit.sk",
    logoSrc: "logo-newspirit.webp",
  },
  {
    imageSrc: "/image5.png",
    title: "deska.shop",
    description: "Managed FB and IG Ad campaigns targeting relevant audience with average ROAS 2.7",
    link: "https://deska.shop",
    logoSrc: "logo-deska.webp",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="relative py-20 lg:py-32 max-w-7xl mx-auto">
        <div className="flex flex-col justify-start items-start px-4 lg:px-0">
          <div className="text-5xl justify-start font-bold text-default-gradient leading-tight">
            Our journey:
            <br />
            Showcasing <span className="text-pink-gradient">client achievements</span>
          </div>
          <p className="text-slate-400 text-base leading-relaxed inline mt-4 mb-8 max-w-xl">
            Take a look at our portfolio to see the diverse range of projects we've successfully completed. Each project
            is a testament to our commitment to quality and client satisfaction.
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <Card className="w-[400px] bg-transparent border-white/[0.2] hover:border-blue-500/[0.5] transition-all duration-700 group">
            <CardHeader>
              <img className="w-32 h-auto" src="/logo-digihry.png" alt="Digihry" />
              <img src="/image1.png" alt="Digihry" />
              <CardTitle>Digihry</CardTitle>
              <CardDescription>Gaming</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full inline-flex items-center gap-2">
                <IoMdCheckmark color="#0f9b0f" />
                Facebook & Instagram Ads
              </div>
              <div className="w-full inline-flex items-center gap-2">
                <IoMdCheckmark color="#0f9b0f" />
                Strategy & Consulting
              </div>
              <div className="w-full inline-flex items-center gap-2">
                <IoMdCheckmark color="#0f9b0f" />
                Ads Management
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="group-hover:border-blue-500  transition-all duration-500">
                Open project
              </Button>
              {/* <Button className="bg-transparent hover:bg-transparent hover:text-blue-500 text-white">Visit site</Button> */}
            </CardFooter>
          </Card>
          <Card className="w-[400px] bg-transparent border-white/[0.2] hover:border-blue-500/[0.5] transition-all duration-700 group">
            <CardHeader>
              <img className="w-20 h-auto" src="/logo-br.png" alt="Butterfly Reality" />
              <img src="/image2.png" alt="Butterfly Reality" />
              <CardTitle>Butterfly Reality</CardTitle>
              <CardDescription>Real Estate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full inline-flex items-center gap-2">
                <IoMdCheckmark color="#0f9b0f" />
                Facebook & Instagram Ads
              </div>
              <div className="w-full inline-flex items-center gap-2">
                <IoMdCheckmark color="#0f9b0f" />
                Social Media Management
              </div>
              <div className="w-full inline-flex items-center gap-2">
                <IoMdCheckmark color="#0f9b0f" />
                Content Creation
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="group-hover:border-blue-500  transition-all duration-500">
                Open project
              </Button>
              {/* <Button>See project</Button> */}
            </CardFooter>
          </Card>
          <Card className="w-[400px] bg-transparent border-white/[0.2] hover:border-blue-500/[0.5] transition-all duration-700 group">
            <CardHeader>
              <img className="w-40 h-auto" src="/logo-previtalitu.webp" alt="Pre Vitalitu" />
              <img src="/image3.png" alt="Pre Vitalitu" />
              <CardTitle>Pre Vitalitu</CardTitle>
              <CardDescription>Health</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full inline-flex items-center gap-2">
                <IoMdCheckmark color="#0f9b0f" />
                Social Media Management
              </div>
              <div className="w-full inline-flex items-center gap-2">
                <IoMdCheckmark color="#0f9b0f" />
                Content Creation
              </div>
              <div className="w-full inline-flex items-center gap-2">
                <IoMdCheckmark color="#0f9b0f" />
                Graphic Design
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="group-hover:border-blue-500  transition-all duration-500">
                Open project
              </Button>
              {/* <Button className="group-hover:bg-blue-500 bg-white/[0.2] text-white transition-all duration-500">
                See project
              </Button> */}
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-row mt-5 justify-between">
          <Card className="w-[400px] bg-transparent border-white/[0.2] hover:border-blue-500/[0.5] transition-all duration-700 group">
            <CardHeader>
              <img className="w-12 h-auto" src="/logo-newspirit.webp" alt="Pre Vitalitu" />
              <img src="/image4.png" alt="Pre Vitalitu" />
              <CardTitle>New Spirit</CardTitle>
              <CardDescription>E-shop</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full inline-flex items-center gap-2">
                <IoMdCheckmark color="#0f9b0f" />
                Social Media Management
              </div>
              <div className="w-full inline-flex items-center gap-2">
                <IoMdCheckmark color="#0f9b0f" />
                Content Creation
              </div>
              <div className="w-full inline-flex items-center gap-2">
                <IoMdCheckmark color="#0f9b0f" />
                Graphic Design
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="group-hover:border-blue-500  transition-all duration-500">
                Open project
              </Button>
              {/* <Button className="group-hover:bg-blue-500 bg-white/[0.2] text-white transition-all duration-500">
                See project
              </Button> */}
            </CardFooter>
          </Card>
          <Card className="w-[400px] bg-transparent border-white/[0.2] hover:border-blue-500/[0.5] transition-all duration-700 group">
            <CardHeader>
              <img className="w-36 h-auto" src="/logo-deska.webp" alt="Pre Vitalitu" />
              <img src="/image5.png" alt="Pre Vitalitu" />
              <CardTitle>Deska</CardTitle>
              <CardDescription>E-shop</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full inline-flex items-center gap-2">
                <IoMdCheckmark color="#0f9b0f" />
                Social Media Management
              </div>
              <div className="w-full inline-flex items-center gap-2">
                <IoMdCheckmark color="#0f9b0f" />
                Content Creation
              </div>
              <div className="w-full inline-flex items-center gap-2">
                <IoMdCheckmark color="#0f9b0f" />
                Graphic Design
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="group-hover:border-blue-500  transition-all duration-500">
                Open project
              </Button>
              {/* <Button className="group-hover:bg-blue-500 bg-white/[0.2] text-white transition-all duration-500">
                See project
              </Button> */}
            </CardFooter>
          </Card>
          <Card className="w-[400px] bg-transparent border-white/[0.2] hover:border-blue-500/[0.5] transition-all duration-700 group">
            <CardHeader>
              <p>Your logo</p>
              <div className="flex justify-center items-center h-60">
                <BsPlusCircleDotted
                  size={64}
                  className="group-hover:text-blue-500 transition-all duration-700 hover:cursor-pointer"
                />
              </div>
              <CardTitle>Your Company</CardTitle>
              <CardDescription>Your Industry</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full inline-flex items-center gap-2">
                <IoMdCheckmark color="#0f9b0f" />
                Everything
              </div>
              <div className="w-full inline-flex items-center gap-2">
                <IoMdCheckmark color="#0f9b0f" />
                you
              </div>
              <div className="w-full inline-flex items-center gap-2">
                <IoMdCheckmark color="#0f9b0f" />
                need!
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline" className="group-hover:border-blue-500  transition-all duration-500">
                Contact Us
              </Button>
              {/* <Button className="group-hover:bg-blue-500 bg-white/[0.2] text-white transition-all duration-500">
                See project
              </Button> */}
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
