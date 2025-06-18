import { FaPython, FaReact, FaNodeJs, FaDatabase, FaJsSquare } from 'react-icons/fa';
import '../css/photosection.css';
import profilePic from '../myphoto.png';

const skills = [
  { name: 'Python', icon: <FaPython color="#3776AB" /> },
  { name: 'React', icon: <FaReact color="#61DAFB" /> },
  { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
  { name: 'MongoDB', icon: <FaDatabase color="#4EA94B" /> },
  { name: 'JavaScript', icon: <FaJsSquare color="#F7DF1E" /> },
];

const Home = () => (
  <div className="home-container">
    <div className="profile-section">
      <img className="my-photo" src={profilePic} alt="ravindu perera" />
      <h1 className="intro-text">Hi, I'm Ravindu Perera |</h1>
    </div>

    <div className="skills-container">
      {skills.map(({ name, icon }) => (
        <div key={name} className="skill-box">
          <div className="skill-icon">{icon}</div>
          <span className="skill-name">{name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Home;
