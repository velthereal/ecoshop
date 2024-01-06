import styles from './product-card.module.css';

const ProductCard = (props) => {
	const { imgSrc, text, priceNew, priceOld } = props;

	return (
		<div className={styles.product}>
			<img src={imgSrc} alt="" />
			<p className={styles.name}>{ text }</p>
			<p className={styles.price}>{ priceNew }</p>
			<p className={styles.oldPrice}>{ priceOld }</p>
		</div>
	)

}

export default ProductCard;