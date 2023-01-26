import { Link } from 'components/Link';
import { Text } from 'components/Text';
import { classes } from 'utils/style';
import styles from './Footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>{`© ${new Date().getFullYear()} Saad Amir.`}</span>
      <br />
      <br />
      <br />
      <span secondary className={styles.lightText}>
        Thank you{' '}
        <Link
          className={styles.lightText}
          href="https://twitter.com/hamishMW"
          target="_blank"
        >
          @HamishMW
        </Link>{' '}
        <br />
        for Original Concept & Usage{' '}
        <Link className={styles.lightText} href="/license.txt" target="_blank">
          license
        </Link>
      </span>
    </Text>
  </footer>
);
