import React from 'react';
import styles from './Button.module.css';

// import styled from 'styled-components';

// import './Button.css';

// Tagged template literal. button is a method on this styled object. instead of adding () we add backticks ``.  This is a default javascript syntax that you don't see very often. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates

// This works for any default html element. style.p for paragraph for example

// This syntax is similar to Sass

// These are scoped to the file.  How this works, is behind the scenes it adds a randomly generated class to this item, something like "sc-dkrFOg fSfgEr" which you can see in the dev tools.  It sets these up in the global CSS, but since it has that custom class they won't affect say, another button in the page.

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
