import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <div className="min-h-screen w-full relative bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400 flex items-center justify-center text-center flex-col gap-10 text-white p-52">
        <h1 className="text-7xl">Section 1</h1>
        <p className="text-3xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
          explicabo id ad et! Tempore beatae optio minima maxime earum eligendi
          corporis nam veritatis, esse exercitationem autem debitis molestias
          labore consequuntur.
        </p>
      </div>
      <div className="min-h-screen w-full relative bg-gradient-to-r from-orange-500 to-yellow-300 flex items-center justify-center text-center flex-col gap-10 text-white p-52">
        <h1 className="text-7xl">Section 2</h1>
        <p className="text-3xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
          explicabo id ad et! Tempore beatae optio minima maxime earum eligendi
          corporis nam veritatis, esse exercitationem autem debitis molestias
          labore consequuntur.
        </p>
      </div>
      <div className="min-h-screen w-full relative bg-gradient-to-r from-sky-500 to-blue-300 flex items-center justify-center text-center flex-col gap-10 text-white p-52">
        <h1 className="text-7xl">Section 3</h1>
        <p className="text-3xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
          explicabo id ad et! Tempore beatae optio minima maxime earum eligendi
          corporis nam veritatis, esse exercitationem autem debitis molestias
          labore consequuntur.
        </p>
      </div>
    </div>
  );
}

export default App;
