import styles from './hero.module.css';

import Button from '../Button';

import hero1 from '../../images/hero1.png';

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className={styles['hero-text']}>
				<h1>Healthy cutlery, <br /> healthy body</h1>
				<p>Upgrade your dining experience and begin your path to a healthy you right now.</p>
				<Button
					text='Learn More'
					type='button'
					styleName={styles.leranMoreBtn} />
			</div>
			<img src={hero1} alt="" />
		</div>
	)
}

export default Hero;