import React from 'react';
import './Loading.css';

class Loading extends React.Component {
  render() {
    return (
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
    </div>
    );
  }
}

export default Loading;
