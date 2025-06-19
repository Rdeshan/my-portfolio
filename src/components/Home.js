import WaveBackground from './WaveBackground';
import '../css/photosection.css';
import profilePic from '../myphoto.png';
import { FaPython, FaReact, FaNodeJs, FaDatabase, FaJsSquare } from 'react-icons/fa';

const skills = [
  { name: 'Python', icon: <FaPython color="#3776AB" /> },
  { name: 'React', icon: <FaReact color="#61DAFB" /> },
  { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
  { name: 'MongoDB', icon: <FaDatabase color="#4EA94B" /> },
  { name: 'JavaScript', icon: <FaJsSquare color="#F7DF1E" /> },
];

const Home = () => (
  <div className="home-container" style={{ position: 'relative', overflow: 'hidden' }}>
    <WaveBackground />

   {/* Floating code snippets with unique animation classes */}
<div className="floating-element float1" style={{ left: '10%', top: '90%' }}>print("Hello")</div>
<div className="floating-element float2" style={{ left: '30%', top: '92%' }}>if (isCool) {'{ ... }'}</div>
<div className="floating-element float3" style={{ left: '70%', top: '95%' }}>when (x) {'{ -> }'}</div>
<div className="floating-element float4" style={{ left: '50%', top: '93%' }}>&lt;div class="code"&gt;</div>
<div className="floating-element float5" style={{ left: '80%', top: '94%' }}>for (i in 0..9)</div>
<div className="floating-element float6" style={{ left: '20%', top: '91%' }}>console.log("Welcome!")</div>
<div className="floating-element float7" style={{ left: '60%', top: '96%' }}>def greet():</div>
<div className="floating-element float8" style={{ left: '40%', top: '94%' }}>let x = 10</div>
<div className="floating-element float9" style={{ left: '85%', top: '97%' }}>&lt;React.Fragment&gt;</div>



    {/* Profile section */}
    <div className="profile-section">
      <img className="my-photo" src={profilePic} alt="ravindu perera" />
      <h1 className="intro-text">Hi, I'm Ravindu Perera |</h1>
    </div>

    {/* Skills section */}
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
