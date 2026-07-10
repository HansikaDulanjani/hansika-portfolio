import {
  FaJava, FaPython, FaDatabase, FaHtml5, FaCss3Alt,
  FaJs, FaGitAlt, FaGithub, FaMicrosoft, FaChartBar,
  FaReact, FaCode, FaSitemap, FaLightbulb,
  FaComments, FaUsers, FaCrown, FaBrain, FaBook, FaNetworkWired, FaFileExcel
} from 'react-icons/fa';
import { SiJupyter, SiR } from 'react-icons/si';

export default function Skills() {
  const skillGroups = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "C (Basic)", icon: <FaCode /> },
      ],
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React (Basic)", icon: <FaReact /> },
      ],
    },
    {
      category: "Data & Analytics",
      skills: [
        { name: "Tableau", icon: <FaChartBar /> },
        { name: "Power BI", icon: <FaChartBar /> },
        { name: "Jupyter Notebook", icon: <SiJupyter /> },
        { name: "MS Excel", icon: <FaFileExcel /> },
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "MS Office", icon: <FaMicrosoft /> },
        { name: "R Studio (Basic)", icon: <SiR /> },
        { name: "Cisco (Basic)", icon: <FaNetworkWired /> },
      ],
    },
    {
      category: "Concepts",
      skills: [
        { name: "Object-Oriented Programming", icon: <FaCode /> },
        { name: "Data Structures & Algorithms", icon: <FaSitemap /> },
        { name: "Problem Solving", icon: <FaLightbulb /> },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Communication", icon: <FaComments /> },
        { name: "Teamwork", icon: <FaUsers /> },
        { name: "Leadership", icon: <FaCrown /> },
        { name: "Analytical Thinking", icon: <FaBrain /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <div key={i} className="skill-group">
            <h3 className="skill-category">{group.category}</h3>
            <div className="skill-items">
              {group.skills.map((skill, j) => (
                <div key={j} className="skill-item">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}