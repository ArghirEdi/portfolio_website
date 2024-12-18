import SkillBar from "./SkillBar";

function Skills() {
  const skills = [
    { skill: "React", percentage: 70 },
    { skill: "Javascript", percentage: 70 },
    { skill: "HTML", percentage: 80 },
    { skill: "CSS", percentage: 75 },
    { skill: "Python", percentage: 80 },
  ];

  return (
    <div
      id="skills"
      className="w-full flex flex-col items-center justify-center text-center pt-10 pb-16 bg-gradient-to-r from-green-200 via-blue-200 to-purple-200"
    >
      <h1 className="text-4xl font-bold mb-16">Skills</h1>
      <div className="w-full max-w-4xl">
        {skills.map((skill) => (
          <SkillBar
            key={skill.skill}
            skill={skill.skill}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
