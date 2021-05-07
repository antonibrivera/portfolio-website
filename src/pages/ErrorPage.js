import React from 'react';
import { Link } from 'react-router-dom';

export default class ErrorHandler extends React.Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError(error) {
    return this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError === true) return (
      <div className='error-page-container'>
        <h2>It looks like something went wrong. Click below to go home while we firgure out what's wrong.</h2>
        <Link to='/' className='error-page-btn'>Go Home</Link>
      </div>
    )
    return this.props.children
  }
}