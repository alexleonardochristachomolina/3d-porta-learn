import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m Saad, currently I live in Lahore working remotely as a web developer for{' '}
      <Link href="https://www.Scandiweb.com">Scandiweb</Link>. My projects include website
      development, 3D-interactions, and digital media.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Every time I write a piece of code, I get the feeling I have created a piece of art.
      This deep interest has allowed me to experience multiple domains in computer
      science.
    </Text>
    <Text className={styles.description} data-visible={visible} size="s" as="p">
      <b>Skills Breakdown</b>
      <br />
      Dev: React, R3F, Gsap, Javascript, Php
      <br />
      Design: Figma, SASS, Tailwind, Gimp
      <br />
      Two Years of Work Experience
      <br />
      <br />
      <b>My USP</b>
      <br />
      Eye for attention to details.
      <br />
      Communication Skills (IELTS 8.0)
      <br />
      Worked with 5+ Frameworks
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Apart from work, I have a Black Belt in Budokàn Karate, Bachelors degree in Computer
      Science & love to try new things. I’m always down for hearing about new projects, so
      feel free to contact.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  Me :)
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me :)"
                />
                <span className={styles.svg} style={{ opacity: 0.5 }}>
                  سعد عامر
                </span>
                {/**
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  <use href={`${profileKatakana}#katakana-profile`} />
                </svg>
                */}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
