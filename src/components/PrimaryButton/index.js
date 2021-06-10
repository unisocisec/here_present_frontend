// nao usar descontinuado
import React, { ButtonHTMLAttributes } from 'react';

import './styles.css';

export default function PrimaryButton() {
  return (
    <button className="primary-button" {...props}>
      {children}
    </button>
  );
}