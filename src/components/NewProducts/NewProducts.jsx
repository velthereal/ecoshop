import styles from './new-products.module.css';

import ProductCard from '../ProductCard';
import Button from '../Button';
import PageWrapper from '../PageWrapper';

import newproduct1 from '../../images/products/newproduct1.png';
import newproduct2 from '../../images/products/newproduct2.png';
import newproduct3 from '../../images/products/newproduct3.png';
import newproduct4 from '../../images/products/newproduct4.png';
import newproduct5 from '../../images/products/newproduct5.png';
import newproduct6 from '../../images/products/newproduct6.png';
import newproduct7 from '../../images/products/newproduct7.png';
import newproduct8 from '../../images/products/newproduct8.png';
import arrow_left from '../../images/icons/arrow-left.png';
import arrow_right from '../../images/icons/arrow-right.png';

import { useState, useRef } from 'react';

const NewProducts = () => {
	const products = [
		{
			imgSrc: newproduct1,
			text: 'Lollygagger Recycled Lounge Chair',
			priceNew: 'Rp699.900',
		},
		{
			imgSrc: newproduct2,
			text: 'Lollygagger Recycled Lounge Chair',
			priceNew: 'Rp999.900',
		},
		{
			imgSrc: newproduct3,
			text: 'Nisswa Recycled Loveseat',
			priceNew: 'Rp1.399.900',
		},
		{
			
			imgSrc: newproduct4,
			text: 'Lollygagger Recycled Outdoor Chaise',
			priceNew: 'Rp1.199.900',
		},
		{
			imgSrc: newproduct5,
			text: 'Recycled Cubby Bench',
			priceNew: 'Rp1.159.900',
		},
		{
			imgSrc: newproduct6,
			text: 'Fresh Air Recycled Table',
			priceNew: 'Rp999.000',
		},
		{
			imgSrc: newproduct7,
			text: 'Emin Recycled Dining Chair',
			priceNew: 'Rp659.000',
		},
		{
			imgSrc: newproduct8,
			text: 'Satellite Recycled Round End Table',
			priceNew: 'Rp399.000',
		},
	];

	const isMobile = window.innerWidth <= 376;
	const itemsPerPage = isMobile ? 2 : 4;

	const [firstVisibleIndex, setFirstVisibleIndex] = useState(0);
	const dragStartX = useRef(0);

	const handleArrowClick = (direction) => {
		const increment = direction === 'right' ? 1 : -1;
		const newIndex = firstVisibleIndex + increment;

		if(newIndex >= 0 && newIndex <= products.length - itemsPerPage) {
			setFirstVisibleIndex(newIndex);
		}
	}
	const handleDragStart = (e) => {
		dragStartX.current = isMobile ? e.touches[0].clientX : e.clientX;
	}
	const handleDragMove = (e) => {
		if(dragStartX.current !== null){
			const clientX = isMobile ? e.touches[0].clientX : e.clientX;
			const dargDistance = clientX - dragStartX.current;
			const itemsToMove = Math.floor(dargDistance / 100);

			const newIndex = Math.min(
				Math.max(firstVisibleIndex - itemsToMove, 0),
				products.length - itemsPerPage
			);
			setFirstVisibleIndex(newIndex);
			dragStartX.current = clientX;
		}
	}
	const handleDragEnd = () => {
		dragStartX.current = null;
	}
	const eventProps = isMobile 
		? {
			onTouchStart: handleDragStart,
			onTouchMove: handleDragMove,
			onTouchEnd: handleDragEnd,
			onTouchCancel: handleDragEnd,
		} : {
			onMouseDown: handleDragStart,
			onMouseMove: handleDragMove,
			onMouseUp: handleDragEnd,
			onMouseLeave: handleDragEnd,
		}
	return (
		<PageWrapper>
			<div {...eventProps} className={styles['new-products']}>
				<div className={styles.container}>
					<div>
						<h3>New Arrival</h3>
						<p>Be the first to have the first-class product</p>
					</div>
					<div className={styles.arrows}>
						<div onClick={() => handleArrowClick('left')} className={firstVisibleIndex === 0 ? styles.disabled : ''}><img src={arrow_left} alt="" /></div>
						<div onClick={() => handleArrowClick('right')} className={firstVisibleIndex === 0 ? styles.disabled : ''}><img src={arrow_right} alt="" /></div>
					</div>
				</div>
				<div className={styles['new-products-list']}>
					{products.slice(firstVisibleIndex, firstVisibleIndex + itemsPerPage).map((product, index) => (
						<ProductCard
							key={index}
							imgSrc={product.imgSrc}
							text={product.text}
							priceNew={product.priceNew} />
					))}
				</div>
				<Button
					text='See More'
					type='button'
					styleName={styles['seeMoreBtn']} />
			</div>
		</PageWrapper>
	)
}

export default NewProducts;