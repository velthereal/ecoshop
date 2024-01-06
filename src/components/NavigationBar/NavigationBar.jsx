import styles from './navigationbar.module.css';

import SerachBar from '../SearchBar';
import PageWrapper from '../PageWrapper';
import Logo from '../Logo';
import BurgerMenu from '../BurgerMenu';

import logo from '../../images/logo/Logo.png';
import profile from '../../images/icons/profile.png';
import bag from '../../images/icons/bag.png';
import burgerMenu from '../../images/icons/menu.png';

import { useState } from 'react';

const NavigationBar = () => {
	const [isShow, setIsShow] = useState(false);
	
	const openBurgerMenuHandler = () => {
		if(isShow === false){
			setIsShow(true);
		} else {
			setIsShow(false);
		}
	}
	return (
		<PageWrapper>
			<div className={styles['navigation-bar']}>
				<Logo />
				<SerachBar />
				<div className={styles.icons}>
					<img src={profile} alt="Profile icon" />
					<img src={bag} alt="Shopping icon" />
				</div>
				<img onClick={() => openBurgerMenuHandler()} className={styles.burgerMenu} src={burgerMenu} alt="" />
			</div>
			<BurgerMenu
				isShow={isShow} />
		</PageWrapper>
	)
}

export default NavigationBar;