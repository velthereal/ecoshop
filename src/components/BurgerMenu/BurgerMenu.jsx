import styles from './burgermenu.module.css';

const BurgerMenu = () => {
	return (
		<ul className={styles.menu}>
			<li>NEW!</li>
			<li>Clothing</li>
			<li>Bath</li>
			<li>Bedding</li>
			<li>Home Goods</li>
			<li>Furniture</li>
			<li>Footwear</li>
			<li>Accesories</li>
		</ul>
	)
}

export default BurgerMenu;