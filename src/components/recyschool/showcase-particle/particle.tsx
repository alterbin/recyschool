import React, { useCallback } from 'react';

import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

interface IParticle {
  name: string;
}

function Particle({ name }: IParticle) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // eslint-disable-next-line no-console
      await console.log(container);
    },
    [],
  );

  return (
    <Particles
      className="app_showcase_section__content__particle"
      id={name}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          repeat: 'no-repeat',
          size: 'cover',
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: false,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 1,
            },
            repulse: {
              distance: 800,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#dadcde',
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 400,
            },
            value: 5,
          },
          opacity: {
            value: 0.05,
          },
          shape: {
            type: 'square',

          },
          size: {
            value: 120,
          },
        },
        // line_linked: {
        //     enable: true,
        //     width: 2,
        //     opacity: 1
        //   },
        fullScreen: {
          enable: false,
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;
