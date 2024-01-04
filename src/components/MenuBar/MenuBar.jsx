import styles from './menubar.module.css';

const MenuBar = () => {
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

export default MenuBar;