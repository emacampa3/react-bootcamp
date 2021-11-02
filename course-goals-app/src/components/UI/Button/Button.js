import React from 'react';

import styles from './Button.module.css'; /* creates new unique class names */

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
