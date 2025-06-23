import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: "#c5dadd",
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            repulse: { distance: 200, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        particles: {
          color: { value: ["#00fffc", "#040727", "#fffc00"] },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 2,
          },
          collisions: { enable: true },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 1,
            straight: false,
          },
          number: { density: { enable: true, area: 800 }, value: 80 },
          opacity: { value: 0.7 },
          shape: { type: "circle" },
          size: { value: { min: 3, max: 7 } },
        },
        detectRetina: true,
      }}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
    />
  );
};

export default ParticlesBackground; 