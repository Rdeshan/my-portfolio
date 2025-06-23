import React from "react";
import "../css/About.css";

const EducationData = [
  {
    logo: "../../sliit.png", // Place image in public/images
    institute_name: "Sri Lanka Institute of Information Technology (SLIIT)",
    time_duration: "2023 - 2027",
    degree: "BSc (Hons) in Software Engineering",
  },
  {
    logo: "../../college.png",
    institute_name: "Colombo -5",
    time_duration: "2009 - 2022",
    degree: "Isipathana College",
  },
  

];

const Educations = () => {
  return (
    <div className="about-card education">
      <h3>Education</h3>
      <div className="education-card-container">
        {EducationData.map((edu, index) => (
          <div key={index} className="education-item-card">

            <div className="adedd">
              <img src={edu.logo} alt="Institute Logo" className="edu-logo" />
              <div className="name-duration">
                <h5>{edu.degree}</h5>
                <p className="edu-name">{edu.institute_name}</p>
                <p className="edu-duration">{edu.time_duration}</p>
              </div>
            </div>



          </div>
        ))}
      </div>
    </div>
  );
};

export default Educations;
