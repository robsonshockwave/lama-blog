import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>lamadev & Robson</div>
      <div className={styles.text}>
        Lama creative thoughts agency © All rights reserved. Developed by
        robsonshockwave. 💟
      </div>
    </div>
  );
};

export default Footer;
