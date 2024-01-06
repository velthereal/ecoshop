import styles from './button.module.css';

const Button = (props) => {
	const { text, type, styleName, onClickFunction } = props;
	return (
		<button type={type} className={styleName} onClick={() => onClickFunction  && onClickFunction()}>{ text }</button>
	)
}

export default Button;