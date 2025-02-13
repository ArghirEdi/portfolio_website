import Project1 from "../assets/img/project_1.png";
import Project2 from "../assets/img/project_2.png";

const projects = [
  {
    id: 1,
    title: "Project 1",
    image: Project1,
    link1: "https://arghireduard.netlify.app/",
    link2: "https://github.com/ArghirEdi/portfolio_website",
  },
  {
    id: 2,
    title: "Project 2",
    image: Project2,
    link1: "https://raularghir.netlify.app/",
    link2: "https://github.com/ArghirEdi/Photography_website",
  },
];

function Projects() {
  return (
    <div
      id="projects"
      className="w-full flex flex-col items-center justify-center text-center md:px-10 pt-10 pb-16 bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 px-4"
    >
      <h1 className="text-4xl font-bold mb-14">Projects</h1>
      <div className="grid grid-cols-1 max-w-4xl md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={project.link1}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 mx-2"
              >
                Website
              </a>
              <a
                href={project.link2}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 mx-2"
              >
                Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
