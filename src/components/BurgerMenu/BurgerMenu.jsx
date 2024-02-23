import './burgermenu.scss';

const BurgerMenu = (props) => {
	const { isShow } = props;
	return (
		<ul className={isShow ? 'menu' : 'hidden'}>
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