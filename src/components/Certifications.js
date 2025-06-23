import React, { useState } from "react";
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
  const [expanded, setExpanded] = useState(false);
  const isMobile = window.innerWidth <= 600;
  const visibleCerts = isMobile && !expanded ? certificationData.slice(0, 2) : certificationData;

  return (
    <div className="about-card certifications-wrapper">
      <h3>
        Certifications  🏆
        {isMobile && (
          <span style={{ fontSize: "1rem", marginLeft: 8, color: "#555" }}>
            ({certificationData.length})
          </span>
        )}
      </h3>
      <div className="certification-cards">
        {visibleCerts.map((cert, index) => (
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
      {isMobile && !expanded && certificationData.length > 2 && (
        <div style={{ textAlign: "center", marginTop: 10 }}>
          <button
            style={{
              background: "none",
              border: "none",
              color: "#007bff",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "1rem",
              textDecoration: "underline"
            }}
            onClick={() => setExpanded(true)}
          >
            See more
          </button>
        </div>
      )}
    </div>
  );
};

export default Certifications;
