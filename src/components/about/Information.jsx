import { FaUser, FaPhone, FaEnvelope } from "react-icons/fa";

function Information() {
  return (
    <div className="mb-8 p-4 flex flex-col items-center text-center">
      <h2 className="text-2xl font-semibold mb-4">Information</h2>
      <div className="flex items-center mb-2">
        <FaUser className="text-xl mr-2" />
        <span>Arghir Eduard Gabriel</span>
      </div>
      <div className="flex items-center mb-2">
        <FaPhone className="text-xl mr-2" />
        <span>+40 741 416 506</span>
      </div>
      <div className="flex items-center mb-2">
        <FaEnvelope className="text-xl mr-2" />
        <span>arghir.eduard@yahoo.com</span>
      </div>
    </div>
  );
}

export default Information;
