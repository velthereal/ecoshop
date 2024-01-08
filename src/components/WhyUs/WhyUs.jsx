import styles from './whyus.module.css';

import PageWrapper from '../PageWrapper';
import CardWhy from '../CardWhy';

import why1 from '../../images/icons/shipping.png';
import why2 from '../../images/icons/smile.png';
import why3 from '../../images/icons/eco.png';
import why4 from '../../images/icons/cs.png';

const WhyUs = () => {
	return (
		<PageWrapper>
			<section className={styles.whyUs}>
				<h2>Why Bought From Us?</h2>
				<div className={styles['cardWhy-list']}>
					<CardWhy
						imgSrc={why1}
						heading='Free Shipping'
						text='Shop now and enjoy free shipping on all orders' />
					<CardWhy
						imgSrc={why2}
						heading='Satisfaction Guaranteed'
						text='Our satisfaction guarantee ensures quality products' />
					<CardWhy
					 	imgSrc={why3}
					 	heading='Eco Friendly Packaging'
					 	text='Using eco-friendly materials, sustainable and biodegradable.' />
					<CardWhy
						imgSrc={why4}
						heading='Fast Response'
						text='24/7 fast and reliable assistance whenever you need it' />
				</div>
			</section>
		</PageWrapper>
	)
}

export default WhyUs;