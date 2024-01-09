import styles from './main.module.css';

import Hero from '../Hero';
import Categories from '../Categories';
import Products from '../Products';
import NewProducts from '../NewProducts';
import Commitment from '../Commitment';
import WhyUs from '../WhyUs';
import ExistSectiion from '../ExistSection';
import SubscribeSection from '../SubscribeSection';
import StickyIcon from '../StickyIcon';
import PopUpPromo from '../PopUpPromo';

import { useState } from 'react';

const Main = () => {
	const [isClicked, setIsClicked] = useState(false);

	const onClickCoupon = () => {
		setIsClicked(true);
	}

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
			<StickyIcon
				onClickCouponFunction={onClickCoupon} />
			{isClicked ? <PopUpPromo /> : ''}
		</div>
	)
}

export default Main;