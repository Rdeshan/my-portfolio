// components/WaveBackground.js
const WaveBackground = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, zIndex: -1, width: '100%', height: '100%', overflow: 'hidden' }}>
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}
      >
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#dfe9f3" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          d="M0,128L40,133.3C80,139,190,149,240,149.3C320,149,400,139,480,138.7C560,139,640,149,720,160C800,171,880,181,960,160C1040,139,1120,85,1200,58.7C1280,32,1360,32,1400,32L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
            M0,128L40,133.3C80,139,160,149,240,149.3C320,149,400,139,480,138.7C560,139,640,149,720,160C800,171,880,181,960,160C1040,139,1120,85,1200,58.7C1280,32,1360,32,1400,32L1440,32L1440,320L0,320Z;

            M0,160L40,154.7C80,149,160,139,240,122.7C320,107,400,85,480,85.3C560,85,640,107,720,128C800,149,880,171,960,176C1040,181,1120,171,1200,144C1280,117,1360,75,1400,53.3L1440,32L1440,320L0,320Z;

            M0,128L40,133.3C80,139,160,149,240,149.3C320,149,400,139,480,138.7C560,139,640,149,720,160C800,171,880,181,960,160C1040,139,1120,85,1200,58.7C1280,32,1360,32,1400,32L1440,32L1440,320L0,320Z
          "
          />
        </path>
      </svg>
    </div>
  );
};

export default WaveBackground;
