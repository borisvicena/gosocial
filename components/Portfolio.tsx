import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/Button";
import { IoMdCheckmark } from "react-icons/io";
import { BsPlusCircleDotted } from "react-icons/bs";
import SectionHeader from "./ui/custom/SectionHeader";
import { SectionHeaderSettings } from "@/data";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="relative py-20 lg:py-32 max-w-7xl mx-auto">
        <SectionHeader
          title={SectionHeaderSettings.portfolio.title}
          gradientTitle={SectionHeaderSettings.portfolio.gradientTitle}
          gradient={"text-pink-gradient"}
          description={SectionHeaderSettings.portfolio.description}
        />
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
              <p className="text-white/[0.2] group-hover:text-white transition-all duration-1000">Your logo</p>
              <div className="flex justify-center items-center h-60">
                <BsPlusCircleDotted
                  size={64}
                  className="text-white/[0.2] group-hover:text-blue-500 transition-all duration-700 hover:cursor-pointer"
                />
              </div>
              <CardTitle className="text-white/[0.2] group-hover:text-white transition-all duration-1000">
                Your Company
              </CardTitle>
              <CardDescription className="text-white/[0.2] group-hover:text-muted-foreground transition-all duration-1000">
                Your Industry
              </CardDescription>
            </CardHeader>
            <CardContent className="text-white/[0.2] group-hover:text-white">
              <div className="w-full inline-flex items-center gap-2 transition-all duration-300">
                <IoMdCheckmark className="text-white/[0.2] group-hover:text-[#0f9b0f] transition-all duration-300" />
                Everything
              </div>
              <div className="w-full inline-flex items-center gap-2 transition-all duration-500">
                <IoMdCheckmark className="text-white/[0.2] group-hover:text-[#0f9b0f] transition-all duration-500" />
                you
              </div>
              <div className="w-full inline-flex items-center gap-2 transition-all duration-700">
                <IoMdCheckmark className="text-white/[0.2] group-hover:text-[#0f9b0f] transition-all duration-700" />
                need!
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                variant="outline"
                className="text-white/[0.2] group-hover:text-white group-hover:border-blue-500  transition-all duration-500"
              >
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
