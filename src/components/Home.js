import { FaPython, FaReact, FaNodeJs, FaDatabase, FaJsSquare } from 'react-icons/fa';
import '../css/photosection.css'
import profilePic from '../myphoto.png';



const skills = [
  { name: 'Python', icon: <FaPython color="#3776AB" /> },
  { name: 'React', icon: <FaReact color="#61DAFB" /> },
  { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
  { name: 'MongoDB', icon: <FaDatabase color="#4EA94B" /> },
  { name: 'JavaScript', icon: <FaJsSquare color="#F7DF1E" /> },
];

const Home = () => (
  <div style={{ padding: '2rem',display:"flex", fontFamily: 'Arial, sans-serif' }}>
    
    <div  className = "container">
      <img  className="my-photo" 
        src={profilePic} alt ="ravindu perera"
        style={{
          width: 250,
          height: 300,
          borderRadius: '70%',
          objectFit: 'cover',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          margin: '60px 60px 10px 10px ',
          display: 'block',
        }}
      />
    </div>

    <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' ,marginTop:'70px',marginLeft:'50px'}}>Hi, I'm Ravindu Perera |</h1>

   
     
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        flexWrap: 'wrap',
        marginTop: '1.5rem',
      }}
    >
   
      {skills.map(({ name, icon }) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 100,
            transition: 'transform 0.3s',
          }}
        >
          <div style={{ fontSize: '3rem' }}>{icon}</div>
          <span style={{ marginTop: 8, fontWeight: 'bold', fontSize: '0.9rem' }}>{name}</span>
        </div>
      ))}
    </div>
    

    
  </div>
);

export default Home;
