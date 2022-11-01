import logo from "../../assets/logo-white.svg";
import styles from "./Footer.module.css";

function Footer() {
	return (
    <footer className={styles.footer}>
      <img src={logo} alt="logo"/>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
	);
}

export default Footer;
