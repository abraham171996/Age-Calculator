
import PropTypes from "prop-types";
import styles from "./main.module.css"

const Input = ({ labelText, htmlFor, placeholder, type }) => {
  return (
    <li className={styles.list}>
      <label className={styles.label}  htmlFor={htmlFor}>{labelText}</label>
      <input className={styles.input} type={type} placeholder={placeholder} />
      
    </li>
  );
};

Input.propTypes = {
    labelText: PropTypes.string.isRequired,
    htmlFor: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired, // Add this line
    type: PropTypes.string.isRequired
  };
export default Input;
