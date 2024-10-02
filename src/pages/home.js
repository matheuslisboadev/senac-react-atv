import React from 'react';
import styles from './home.module.css';

export default function index() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <a className={styles.navItem}>Home</a>
        <a className={styles.navItem}>About</a>
        <a className={styles.navItem}>Services</a>
        <a className={styles.navItem}>Contact</a>
      </nav>

      <div className={styles.mainContent}>
        <div className={styles.placeholderLogo}>MyGarage</div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non erat eu orci vehicula scelerisque.
        </p>

        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Card 1</h3>
            <p className={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Card 2</h3>
            <p className={styles.cardText}>Suspendisse potenti. Ut id libero sed enim suscipit gravida.</p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Card 3</h3>
            <p className={styles.cardText}>Fusce accumsan, nisl a elementum lacinia, ex justo tincidunt urna.</p>
          </div>
        </div>

        <div className={styles.centralImage}>
          <div>
          <img src='https://placehold.co/400x400' alt='placeholder'></img>
          </div>
          <div>
          <img src='https://placehold.co/400x400' alt='placeholder'></img>
          </div>
        </div>

        <div className={styles.additionalText}>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet bibendum sapien.
          </p>
          <p className={styles.text}>
            Nunc tincidunt lorem nec lectus convallis, at varius sapien dictum. Cras malesuada felis a lectus.
          </p>
          <p className={styles.text}>
            Integer non metus in ipsum elementum lacinia. Morbi posuere sapien in turpis congue pharetra.
          </p>
        </div>
      </div>

      <footer className={styles.footer}>
        <p className={styles.footerText}>© 2024 MyGarage. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
