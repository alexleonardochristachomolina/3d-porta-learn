import sliceTextureLarge from 'assets/slice-app-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/slice-app.jpg';
import stack from 'assets/stack-mob.png';
import vertex from 'assets/vertex-mob.png';
import laderach from 'assets/laderach.png';
import smiels from 'assets/smiels.png';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import { Link } from 'components/Link';

const disciplines = ['Design', 'React', 'Threejs', 'R3F', 'Gsap'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  const getDescforMobGames = () => {
    return (
      <p>
        Developed <Link href="https://stack-tower-3d.vercel.app">Stack</Link> and{' '}
        <Link href="https://vertex-env.vercel.app">Vertex</Link> game with React3F.
        Implemented gsap animations and cannonjs for realistic physics.
      </p>
    );
  };

  return (
    <div className={styles.home}>
      <Meta
        title="Developer + Designer"
        description="Developer portfolio of Saad Amir — a product designer working on web apps
        with a focus on motion, experience design, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Läderach Swiss Chocolate"
        description="Magento website development from figma design. Multiple technologies and 3rd party modules were also integrated."
        urduWord={'رب پر ایمان'}
        buttonText="Learn More"
        buttonLink="/project/laderach-swiss-chocolate/"
        model={{
          type: 'laptop',
          alt: 'Laderach chocolate',
          textures: [
            {
              srcSet: [laderach],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Smooth Games Powered by Webgl"
        description={getDescforMobGames()}
        urduWord={'اعتماد'}
        buttonText="Learn More"
        buttonLink="/projects/"
        model={{
          type: 'phone',
          alt: 'Stack tower game',
          textures: [
            {
              srcSet: [vertex],
              placeholder: sprTexturePlaceholder,
            },
            {
              srcSet: [stack],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="SMIELS B2B ecommerce fintech"
        description="Worked as project manager assistant dealing with requirement management, sprint planning and client meetings."
        urduWord={' اور محنت'}
        buttonText="Visit Website"
        buttonLink="https://smiels.com/"
        model={{
          type: 'laptop',
          alt: 'Vertex Environment R3F',
          textures: [
            {
              srcSet: [smiels],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="about"
      />
      <Footer />
    </div>
  );
};
