import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";

function Header() {
	return (
		<header className={styles.header}>
			<Link to="/" aria-label="Accueil"><img src={logo} alt="logo du site Kasa"/></Link>
			<nav className={styles.nav}>
				<NavLink className={({isActive}) => isActive ? styles.link + " " + styles.linkActive : styles.link } end to="/">
					accueil
				</NavLink>
				<NavLink className={({isActive}) => isActive ? styles.link + " " + styles.linkActive : styles.link }
					end to="/about">
					à propos
				</NavLink>
			</nav>
		</header>
	);
}

export default Header;
