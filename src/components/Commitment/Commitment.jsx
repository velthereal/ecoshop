import styles from './commitment.module.css';

import PageWrapper from '../PageWrapper';

import vector from '../../images/commitmentvector.png';

const Commitment = () => {
	return (
		<div className={styles.commitment}>
			<PageWrapper>
				<h4>Shop guilt-free knowing that our eco-friendly e-commerce platform is committed to reducing environmental impact and promoting sustainable practices in every step of the shopping process</h4>
				<img src={vector} alt="" />
			</PageWrapper>
		</div>
	)

}

export default Commitment;