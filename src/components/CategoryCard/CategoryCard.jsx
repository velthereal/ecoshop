import styles from './category-card.module.css';

import Button from '../Button';

const CategoryCard = (props) => {
	const { btnText, cardClassName } = props;
	return (
		<div className={`${styles[cardClassName]} ${styles.card}`}>
			<Button
				text={btnText}
				type='button'
				styleName={styles.categoryBtn} />
		</div>
	)
}

export default CategoryCard;