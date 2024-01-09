import styles from './salebar.module.css';

const SaleBar = (props) => {
	const { className } = props;

	return (
		<div className={`${styles["sale-bar"]} ${styles[className]}`}>Free Shipping with minimum purchase Rp250.000</div>
	)
}

export default SaleBar;