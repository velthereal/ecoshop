import styles from './section-media.module.css';

import media1 from '../../images/media/1.png';
import media2 from '../../images/media/2.png';
import media3 from '../../images/media/3.png';
import media4 from '../../images/media/4.png';
import media5 from '../../images/media/5.png';
import media6 from '../../images/media/6.png';
import media7 from '../../images/media/7.png';
import media8 from '../../images/media/8.png';

const SectionMedia = () => {
	return (
		<section className={styles.sectionMedia}>
			<img src={media1} alt="" />
			<img src={media2} alt="" />
			<img src={media3} alt="" />
			<img src={media4} alt="" />
			<img src={media5} alt="" />
			<img src={media6} alt="" />
			<img src={media7} alt="" />
			<img src={media8} alt="" />
		</section>
	)
}

export default SectionMedia;