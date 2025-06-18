import { FaPython, FaReact, FaNodeJs, FaDatabase, FaJsSquare } from 'react-icons/fa';

const skills = [
  { name: 'Python', icon: <FaPython color="#3776AB" /> },
  { name: 'React', icon: <FaReact color="#61DAFB" /> },
  { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
  { name: 'MongoDB', icon: <FaDatabase color="#4EA94B" /> },
  { name: 'JavaScript', icon: <FaJsSquare color="#F7DF1E" /> },
];

const Home = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h1>Welcome to My Portfolio</h1>
    <h2>My Technical Skills</h2>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
      {skills.map(({ name, icon }) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 100 }}>
          <div style={{ fontSize: '3rem' }}>{icon}</div>
          <span style={{ marginTop: 8, fontWeight: 'bold' }}>{name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Home;
