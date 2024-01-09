import styles from './categories.module.css';

import CategoryCard from '../CategoryCard';
import PageWrapper from '../PageWrapper';

const Categories = () => {
	const categories = [
		{
			name: 'Clothing',
			className: 'clothing',
		},
		{
			name: 'Home Goods',
			className: 'home_goods',
		},
		{
			name: 'Bedding',
			className: 'bedding',
		},
		{
			name: 'Furniture',
			className: 'furniture',
		},
		{
			name: 'Accesories',
			className: 'accesories',
		},
	];
	return (
		<PageWrapper>
			<div id='categories' className={styles.categories}>
				<h3>Category <br /> for <br /> you</h3>
				{categories.map((category, index) => (
					<CategoryCard
						key={index}
						btnText={category.name}
						cardClassName={category.className} />
				))}
			</div>
		</PageWrapper>
	)
}

export default Categories;