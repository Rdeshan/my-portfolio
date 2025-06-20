// components/WaveBackground.js
const WaveBackground = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, zIndex: -1, width: '100%', height: '100%', overflow: 'hidden' }}>
      <svg
        viewBox="0 0 1440 160" // Reduced viewBox height
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '1000px',
          transform: 'scaleY(0.7)', // Visually compress wave height
          transformOrigin: 'bottom',
        }}
      >
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f9f9d3" />
            <stop offset="100%" stopColor="#b7d6e7" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          d="M0,64L40,66.6C80,69,160,74,240,74.6C320,75,400,70,480,69.3C560,69,640,74,720,80C800,85,880,90,960,80C1040,69,1120,42,1200,29.3C1280,16,1360,16,1400,24L1440,32L1440,160L0,160Z"
        >
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="
              M0,64L40,66.6C80,69,160,74,240,74.6C320,75,400,70,480,69.3C560,69,640,74,720,80C800,85,880,90,960,80C1040,69,1120,42,1200,29.3C1280,16,1360,16,1400,24L1440,32L1440,160L0,160Z;

              M0,80L40,77.3C80,75,160,69,240,61.3C320,53,400,42,480,42.6C560,43,640,53,720,64C800,75,880,85,960,88C1040,91,1120,85,1200,72C1280,58,1360,37,1400,30L1440,32L1440,160L0,160Z;

              M0,64L40,66.6C80,69,160,74,240,74.6C320,75,400,70,480,69.3C560,69,640,74,720,80C800,85,880,90,960,80C1040,69,1120,42,1200,29.3C1280,16,1360,16,1400,24L1440,32L1440,160L0,160Z
            "
          />
        </path>
      </svg>
    </div>
  );
};

export default WaveBackground;
