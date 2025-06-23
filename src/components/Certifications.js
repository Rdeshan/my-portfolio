import React from "react";
import "../css/About.css"; // reuse the same CSS
import { FaArrowRight } from "react-icons/fa";

const certificationData = [
  {
    title: "CI/CD for Beginners",
    issuer: "Simplilearn",
    logo: "../../Simplilearn.png",
    image: "../../_certificate.png",
    credentialId: "8479500",
    link: "https://certificates.simplicdn.net/share/8479500_88418251750171259300.pdf",
  },
  {
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    logo: "../../moratuwa_uni.jpg",
    image: "../../python.png",
    credentialId: "tl85lrFp9r",
    link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
  },
  {
    title: "Python Projects for Beginners",
    issuer: "Great Learning",
    logo: "../../great.png",
    image: "../../great_cert.png",
    credentialId: "",
    link: "https://olympus.mygreatlearning.com/courses/49365/certificate?pb_id=581",
  },
  {
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    logo: "../../moratuwa_uni.jpg",
    image: "../../python.png",
    credentialId: "tl85lrFp9r",
    link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
  },
  {
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    logo: "../../moratuwa_uni.jpg",
    image: "../../python.png",
    credentialId: "tl85lrFp9r",
    link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
  },
];

const Certifications = () => {
  return (
    <div className="about-card certifications-wrapper">
      <h3>Certifications  🏆</h3>
      <div className="certification-cards">
        {certificationData.map((cert, index) => (
          <div className="cert-card-v2" key={index}>
            {/* Header with logo + name */}

            <div className="cert-header-v2">
              <img src={cert.logo} alt="logo" className="cert-logo" />
              <div className="tittle-issure">
                <h5 className="cert-title">{cert.title}</h5>
                <p className="cert-issure">{cert.issuer}</p>
              </div>
            </div>

            {/* Certificate image + view button */}
            <div className="cert-image-wrapper">
              <img src={cert.image} alt={cert.title} className="cert-image" />
              <a
                className="view-cert-btn"
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View <FaArrowRight />
              </a>
            </div>

            {/* Credential ID */}
           {cert.credentialId && (
  <p className="credential-id">
    Credential ID: <strong>{cert.credentialId}</strong>
  </p>
)}

          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
