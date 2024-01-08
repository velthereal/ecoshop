import styles from './main.module.css';

import Hero from '../Hero';
import Categories from '../Categories';
import Products from '../Products';
import NewProducts from '../NewProducts';
import Commitment from '../Commitment';
import WhyUs from '../WhyUs';
import ExistSectiion from '../ExistSection';
import SubscribeSection from '../SubscribeSection';

const Main = () => {
	return (
		<div className={styles.main}>
			<Hero />
			<Categories />
			<Products />
			<NewProducts />
			<Commitment />
			<WhyUs />
			<ExistSectiion />
			<SubscribeSection />
		</div>
	)
}

export default Main;