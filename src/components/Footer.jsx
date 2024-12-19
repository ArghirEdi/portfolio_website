import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full flex flex-col items-center justify-center text-center py-10 bg-gradient-to-r from-green-200 via-blue-200 to-purple-200">
      <h1 className="text-4xl font-bold mb-4">Thank you!</h1>
      <p className="text-lg mb-4">
        I am Eduard and this is my personal website, consult me here.
      </p>
      <div className="flex space-x-4 mb-4">
        <a
          href="https://www.facebook.com/arghir.eduard.7/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-800"
        >
          <FaFacebook size={32} />
        </a>
        <a
          href="https://www.instagram.com/arghiredi/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-pink-600"
        >
          <FaInstagram size={32} />
        </a>
      </div>
      <p className="text-sm">
        All rights reserved by Arghir Eduard Gabriel - {currentYear}
      </p>
    </div>
  );
}

export default Footer;
