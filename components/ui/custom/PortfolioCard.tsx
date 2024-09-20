import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../card";
import { Button } from "../Button";
import { IoMdCheckmark } from "react-icons/io";

type PortfolioCardProps = {
  logo: string;
  image: string;
  title: string;
  description: string;
  services: string[];
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({ logo, image, title, description, services }) => {
  return (
    <Card className="w-[400px] bg-transparent border-white/[0.2] hover:border-blue-500/[0.5] transition-all duration-700 group">
      <CardHeader>
        <img className="w-24 h-auto" src={logo} alt={title} />
        <img src={image} alt={title} />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {services.map((service, index) => (
          <div className="w-full inline-flex items-center gap-2" key={index}>
            <IoMdCheckmark color="#0f9b0f" />
            {service}
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="group-hover:border-blue-500 transition-all duration-500">
          Open project
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PortfolioCard;
