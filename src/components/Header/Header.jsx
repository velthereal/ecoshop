import styles from './header.module.css';

import SaleBar from '../SaleBar';
import Navigation from '../Navigation';

import { useState, useEffect } from 'react';

const Header = () => {
	const [isHidden, setIsHidden] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;

			if(scrollPosition > 50) {
				setIsHidden(true);
			} else {
				setIsHidden(false);
			}
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	}, []);
	return (
		<header>
			<div className={styles.header}>
				<SaleBar
					className={isHidden ? 'hidden' : ''} />
				<Navigation />
			</div>
		</header>
	)
}

export default Header;