import styles from './exist-section.module.css';

import SectionMedia from '../SectionMedia';

import dots from '../../images/dots.png';
import vector from '../../images/vaector.png';
import vector2 from '../../images/vector2.png';
import vector3 from '../../images/vector3.png';
import vector4 from '../../images/vector4.png';

const ExistSectiion = () => {
	return (
		<div className={styles.existSection}>
			<h3>We Are Exist</h3>
			<SectionMedia />
			<img className={styles.dots} src={dots} alt="" />
			<img className={styles.vector1} src={vector} alt="" />
			<img className={styles.vector2} src={vector2} alt="" />
			<img className={styles.vector3} src={vector3} alt="" />
			<img className={styles.vector4} src={vector4} alt="" />
		</div>
	)
}

export default ExistSectiion;