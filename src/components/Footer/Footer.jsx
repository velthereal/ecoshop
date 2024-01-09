import styles from './footer.module.css';

import PageWrapper from '../PageWrapper';

import pay1 from '../../images/payment/BCA.png';
import pay2 from '../../images/payment/BNI.png';
import pay3 from '../../images/payment/BRI.png';
import pay4 from '../../images/payment/Bank Syariah Indonesia.png';
import pay5 from '../../images/payment/DANA.png';
import pay6 from '../../images/payment/GOPAY.png';
import pay7 from '../../images/payment/MANDIRI.png';
import pay8 from '../../images/payment/MASTERCARD.png';
import pay9 from '../../images/payment/MAYBANK.png';
import pay10 from '../../images/payment/MEGA.png';
import pay11 from '../../images/payment/SHOPEEPAY.png';
import pay12 from '../../images/payment/VISA.png';
import logo from '../../images/logo/logofotter.png';
import social1 from '../../images/socialmedia/viber.png';
import social2 from '../../images/socialmedia/tictoc.png';
import social3 from '../../images/socialmedia/instagram.png';
import social4 from '../../images/socialmedia/facebook.png';

const Footer = () => {
	return (
		<footer>
			<div className={styles.forBorder}>
				<PageWrapper>
					<div className={styles.footer}>
						<img src={logo} alt="" />
						<div className={styles.menuLists}>
							<ul>
								<li className={styles.firstLi}>Eco Shop</li>
								<li>About Us</li>
								<li>Contact Us</li>
								<li>FAQs</li>
							</ul>
							<ul>
								<li className={styles.firstLi}>Product Categories</li>
								<li>New</li>
								<li>Clothing</li>
								<li>Bath & Bedding</li>
								<li>Home Goods</li>
								<li>Furniture</li>
								<li>Accesories</li>
								<li>Gift</li>
							</ul>
							<ul>
								<li className={styles.firstLi}>Support</li>
								<li>Shipping</li>
								<li>Returns</li>
								<li>Privacy Policy</li>
								<li>Terms of Use</li>
								<li>Affiliates</li>
							</ul>
							<ul className={styles.payment}>
								<li className={styles.firstLi}>Payment</li>
								<li><img src={pay1} alt="" /></li>
								<li><img src={pay2} alt="" /></li>
								<li><img src={pay3} alt="" /></li>
								<li><img src={pay4} alt="" /></li>
								<li><img src={pay5} alt="" /></li>
								<li><img src={pay6} alt="" /></li>
								<li><img src={pay7} alt="" /></li>
								<li><img src={pay8} alt="" /></li>
								<li><img src={pay9} alt="" /></li>
								<li><img src={pay10} alt="" /></li>
								<li><img src={pay11} alt="" /></li>
								<li><img src={pay12} alt="" /></li>
							</ul>
						</div>
					</div>
				</PageWrapper>
			</div>
			<PageWrapper>
				<div className={styles.bottom}>
					<p>© 2023 Eco Shop Indonesia. All Rights Reserved.</p>
					<ul>
						<li><img src={social1} alt="" /></li>
						<li><img src={social2} alt="" /></li>
						<li><img src={social3} alt="" /></li>
						<li><img src={social4} alt="" /></li>
					</ul>
				</div>
			</PageWrapper>
		</footer>
	)
}

export default Footer;