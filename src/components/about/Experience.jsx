import { FaMedal, FaBriefcase, FaHeadset } from "react-icons/fa";

function Experience() {
  return (
    <div className="p-4 flex flex-col items-center text-center">
      <h2 className="text-2xl font-semibold mb-4">Experience and Support</h2>
      <div className="flex items-center mb-2">
        <FaMedal className="text-xl mr-2" />
        <span>3 Years Job Experience</span>
      </div>
      <div className="flex items-center mb-2">
        <FaBriefcase className="text-xl mr-2" />
        <span>10+ Projects Completed</span>
      </div>
      <div className="flex items-center mb-2">
        <FaHeadset className="text-xl mr-2" />
        <span>Assist Online 24/7</span>
      </div>
    </div>
  );
}

export default Experience;
