import styles from './searchbar.module.css';

import search from '../../images/icons/search.png'

const SerachBar = () => {
	return (
		<div className={styles['serach-bar']}>
			<img className={styles.search} src={search} alt="" />
			<input type="serach" placeholder='Search here...' />
		</div>
	)

}

export default SerachBar;