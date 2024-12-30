import { FaLinkedin, FaGithub } from "react-icons/fa";
import resumePDF from "../assets/documents/CV_Eduard_Arghir.pdf";
import MyImage from "../assets/img/personal_photo.jpg";

function Home() {
  return (
    <div
      id="home"
      className="w-full flex flex-col items-center justify-around text-center pb-16 pt-10 md:pt-32 bg-gradient-to-r from-green-200 via-blue-200 to-purple-200"
    >
      <img
        src={MyImage}
        alt="Your Name"
        className="w-96 h-96 rounded-full mb-4"
      />

      <h1 className="text-4xl font-bold mb-2">Arghir Eduard Gabriel</h1>
      <h2 className="text-2xl font-semibold mb-4">Software Developer</h2>
      <div className="flex space-x-4 mb-4">
        <a
          href="https://www.linkedin.com/in/eduard-arghir/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-800"
        >
          <FaLinkedin size={35} />
        </a>
        <a
          href="https://github.com/ArghirEdi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black"
        >
          <FaGithub size={35} />
        </a>
      </div>
      <a
        href={resumePDF}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-orange-500 text-white py-3 px-5 rounded hover:bg-orange-600"
      >
        Download Resume
      </a>
    </div>
  );
}

export default Home;
