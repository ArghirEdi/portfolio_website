import PropTypes from "prop-types";

function SkillBar({ skill, percentage }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-lg font-semibold">{skill}</span>
        <span className="text-lg font-semibold">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-orange-500 h-4 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

SkillBar.propTypes = {
  skill: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default SkillBar;
