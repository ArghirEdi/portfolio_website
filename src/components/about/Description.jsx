import MyImage2 from "/src/assets/img/me.png";

function Description() {
  return (
    <div className="p-4">
      <p className="text-lg mb-4">
        I am a passionate software developer with a strong background in
        building scalable applications. I enjoy solving complex problems and
        continuously improving my skills.
      </p>
      <img
        src={MyImage2}
        alt="photo of me"
        className="w-48 h-56 rounded-lg mx-auto"
      />
    </div>
  );
}

export default Description;
