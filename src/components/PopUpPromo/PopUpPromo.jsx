import styles from './popup-promo.module.css';

import popUp_img from '../../images/popup/popup.png';
import close from '../../images/icons/close.png';

import Button from '../Button';

import { useState, useEffect } from 'react';

const PopUpPromo = () => {
	const [isOpened, setIsOpened] = useState(false);

	useEffect(() => {
        setTimeout(() => setIsOpened(true), 1500)
    }, [])

	const onCloseHandler = () => {
		setIsOpened(false);
	}

	return (
			<div className={isOpened ? styles.bg : styles.hidden}>
				<div className={styles['popup-promo']}>
					<img onClick={() => onCloseHandler()} className={styles.close} src={close} alt="" />
					<img className={styles.popUpImg} src={popUp_img} alt="" />
					<div className={styles['popup-text']}>
						<h5>Get 15% off</h5>
						<p>on your initial purchase of our chosen products</p>
						<Button
							type='button'
							text='Shop Now'
							styleName={styles['shopNowBtn']} />
					</div>
				</div>
			</div>
	)
}

export default PopUpPromo;