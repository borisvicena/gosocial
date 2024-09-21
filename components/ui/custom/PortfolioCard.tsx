import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../card";
import { Button } from "../Button";
import { IoMdCheckmark } from "react-icons/io";
import { BsPlusCircleDotted } from "react-icons/bs";
import { cn } from "@/lib/utils";

type PortfolioCardProps = {
  logo: string;
  image?: string;
  title: string;
  description: string;
  services: string[];
  placeholder?: boolean;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({ logo, image, title, description, services, placeholder }) => {
  const imageHeight = "h-60"; // Define a consistent height for image and icon

  return (
    <Card
      className={cn(
        placeholder ? "border-white/[0.1]" : "border-white/[0.2]",
        "w-[400px] bg-transparent hover:border-blue-500/[0.5] transition-all duration-700 group"
      )}
    >
      <CardHeader>
        <div className="inline-flex h-14 items-center">
          {placeholder ? (
            <p className="text-white/[0.2] group-hover:text-white transition-all duration-700">{logo}</p>
          ) : (
            <img className="w-1/4 h-auto" src={logo} alt={title} />
          )}
        </div>

        {placeholder ? (
          <div className={`flex justify-center items-center ${imageHeight}`}>
            <BsPlusCircleDotted
              size={64}
              className="text-white/[0.2] group-hover:text-blue-500 transition-all duration-700 hover:cursor-pointer"
            />
          </div>
        ) : (
          <img className={`w-full object-cover ${imageHeight}`} src={image} alt={title} />
        )}

        {placeholder ? (
          <CardTitle className="text-white/[0.2] group-hover:text-white transition-all duration-700">{title}</CardTitle>
        ) : (
          <CardTitle>{title}</CardTitle>
        )}
        {placeholder ? (
          <CardDescription className="text-white/[0.2] group-hover:text-muted-foreground transition-all duration-700">
            {description}
          </CardDescription>
        ) : (
          <CardDescription>{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        {services.map((service, index) => (
          <div
            className={`w-full inline-flex items-center gap-2 ${
              placeholder ? "text-white/[0.2] group-hover:text-white transition-all duration-700" : "text-white"
            }`}
            key={index}
          >
            <IoMdCheckmark
              className={placeholder ? "text-white/[0.2] group-hover:text-[#0f9b0f] transition-all duration-500" : ""}
              color={placeholder ? "" : "#0f9b0f"}
            />
            {service}
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          className={`group-hover:border-blue-500 transition-all duration-500 ${
            placeholder ? "text-white/[0.2] group-hover:text-white" : ""
          }`}
        >
          {placeholder ? "Contact Us" : "Open Project"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PortfolioCard;
