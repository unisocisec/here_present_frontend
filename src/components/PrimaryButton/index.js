// nao usar descontinuado
import React from 'react';

import './styles.css';

export default class PrimaryButton extends React.Component{
  render(){
    return (
      <button className="primary-button" {...this.props}>
        {this.props.children}
      </button>
    );
  }
}
