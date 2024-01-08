import styles from './cardwhy.module.css';

const CardWhy = (props) => {
	const { imgSrc, heading, text } = props;
	return (
		<div className={styles.cardWhy}>
			<img src={imgSrc} alt="" />
			<p>{ heading }</p>
			<p>{ text }</p>
		</div>
	)
}

export default CardWhy;