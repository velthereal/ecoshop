import styles from './subscribe.module.css';

import Button from '../Button';

const SubscribeSection = () => {
	return (
		<section className={styles.subscribe}>
			<div className={styles.setSubscribe}>
				<p>Subscribe to our newsletter</p>
				<p>Be the first to know about exclusive offers, eco-tips, and new arrivals!</p>
				<input type="email" placeholder='Your email' />
				<Button
					text='Subscribe'
					type='button'
					styleName={styles.btnSubscribe} />
			</div>
		</section>
	)
}

export default SubscribeSection;