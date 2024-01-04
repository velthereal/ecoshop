import styles from './logo.module.css';

import logo from '../../images/logo/Logo.png';

const Logo = () => {
	return (
		<img className={styles['logotype']} src={logo} alt='EcoShop Logo'/>
	)
}

export default Logo;