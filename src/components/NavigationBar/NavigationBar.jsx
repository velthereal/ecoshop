import styles from './navigationbar.module.css';

import SerachBar from '../SearchBar';
import PageWrapper from '../PageWrapper';

import logo from '../../images/logo/Logo.png';
import profile from '../../images/icons/profile.png';
import bag from '../../images/icons/bag.png';

const NavigationBar = () => {
	return (
		<PageWrapper>
			<div className={styles['navigation-bar']}>
				<img src={logo} alt='EcoShop Logo'/>
				<SerachBar />
				<div className={styles.icons}>
					<img src={profile} alt="Profile icon" />
					<img src={bag} alt="Shopping icon" />
				</div>
			</div>
		</PageWrapper>
	)
}

export default NavigationBar;