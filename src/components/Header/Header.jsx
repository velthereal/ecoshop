// import styles from'./header.css';

import SaleBar from '../SaleBar';
import Navigation from '../Navigation';
import BurgerMenu from '../BurgerMenu';

const Header = () => {
	return (
		<header>
			<SaleBar />
			<Navigation />
			<BurgerMenu />
		</header>
	)
}

export default Header;