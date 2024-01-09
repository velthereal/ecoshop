import styles from './sticky-icon.module.css';

import chat from '../../images/icons/chat-bubble.png';
import coupon from '../../images/icons/coupon.png';

const StickyIcon = (props) => {
	const { onClickCouponFunction } = props;

	return (
		<div className={styles.stickyIcons}>
			<div onClick={() => onClickCouponFunction()} className={styles.stickyCoupon}>
				<img src={coupon} alt="" />
			</div>
			<div className={styles.stickyChat}>
				<img src={chat} alt="" />
			</div>
		</div>
	)
}

export default StickyIcon;