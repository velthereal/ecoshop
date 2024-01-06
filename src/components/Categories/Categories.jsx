import styles from './categories.module.css';

import CategoryCard from '../CategoryCard';
import PageWrapper from '../PageWrapper';

const Categories = () => {
	return (
		<PageWrapper>
			<div className={styles.categories}>
				<h3>Category <br /> for <br /> you</h3>
				<CategoryCard
					btnText='Clothing'
					cardClassName='clothing' />
				<CategoryCard
					btnText='Home Goods'
					cardClassName='home_goods' />
				<CategoryCard
					btnText='Bedding'
					cardClassName='bedding' />
				<CategoryCard
					btnText='Furniture'
					cardClassName='furniture' />
				<CategoryCard
					btnText='Accesories'
					cardClassName='accesories' />
			</div>
		</PageWrapper>
	)
}

export default Categories;