import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="relative py-20 h-[100vh] max-w-7xl w-full">
        <h2 className="dark:text-white text-black-100 heading">
          We strive for better{" "}
          <span className="bg-gradient-to-br from-[#9e65f4] dark:to-[#cbacf9] to-purple-700 bg-clip-text text-transparent">
            {" "}
            digital future
          </span>
        </h2>
      </div>
    </section>
  );
};

export default About;
