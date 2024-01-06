import styles from './products.module.css';

import ProductCard from '../ProductCard';
import PageWrapper from '../PageWrapper';

import product1 from '../../images/products/product1.png';
import product2 from '../../images/products/product2.png';
import product3 from '../../images/products/product3.png';
import product4 from '../../images/products/product4.png';

const Products = () => {
	return (
		<div className={styles.products}>
			<PageWrapper>
				<h2>Our Most Wanted Products</h2>
				<p className={styles['products-text']}>Good for environment, good for you</p>
				<div className={styles['products-list']}>
					<ProductCard
						imgSrc={product1}
						text='Alpine Provisions | Cedar + Sandalwood Hand Soap'
						priceNew='Rp99.900'
						priceOld='Rp259.000' />
					<ProductCard
						imgSrc={product2}
						text="Women's Classic Sole Low Back Wool Slippers"
						priceNew='Rp79.900'
						priceOld='Rp159.900' />
					<ProductCard
						imgSrc={product3}
						text='Large Patterned Hamper Basket'
						priceNew='Rp199.900'
						priceOld='Rp329.900' />
					<ProductCard
						imgSrc={product4}
						text='Meliora | Eco Laundry Powder'
						priceNew='Rp159.000'
						priceOld='Rp259.000' />
				</div>
			</PageWrapper>
		</div>
	)
}

export default Products;