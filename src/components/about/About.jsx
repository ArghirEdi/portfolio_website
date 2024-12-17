import Description from "./Description";
import Information from "./Information";
import Experience from "./Experience";

function About() {
  return (
    <div
      id="about"
      className="w-full flex flex-col items-center justify-normal text-center pt-10 pb-16"
    >
      <h1 className="text-4xl font-bold mb-16">About Me</h1>
      <div className="flex flex-col md:flex-row w-full max-w-4xl">
        {/* Left Section */}
        <div className="md:w-1/2">
          <Description />
        </div>
        {/* Right Section */}
        <div className="md:w-1/2">
          <Information />
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default About;
