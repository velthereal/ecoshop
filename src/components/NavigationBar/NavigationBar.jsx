import styles from './navigationbar.module.css';

import SerachBar from '../SearchBar';
import PageWrapper from '../PageWrapper';
import BurgerMenu from '../BurgerMenu';
import Logo from '../Logo';

import logo from '../../images/logo/Logo.png';
import profile from '../../images/icons/profile.png';
import bag from '../../images/icons/bag.png';
import burgerMenu from '../../images/icons/menu.png';

const NavigationBar = () => {
	return (
		<PageWrapper>
			<div className={styles['navigation-bar']}>
				<Logo />
				<SerachBar />
				<div className={styles.icons}>
					<img src={profile} alt="Profile icon" />
					<img src={bag} alt="Shopping icon" />
				</div>
				<img className={styles.burgerMenu} src={burgerMenu} alt="" />
				<BurgerMenu />
			</div>
		</PageWrapper>
	)
}

export default NavigationBar;