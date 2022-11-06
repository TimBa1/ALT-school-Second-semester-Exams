import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
  state = {
    error: '',
    errorInfo: '',
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
  
    console.log({ error, errorInfo });
    this.setState({ errorInfo });
  }

  render() {
    const { hasError, errorInfo } = this.state;
    if (hasError) {
      return (
        <div className="card my-5" style={{borderRadius:"20px",backgroundColor:"rgb(48, 40, 72)", filter:"drop-shadow(0px 5px 3px grey)"}}>
          <div className="card-header">
            <p style={{color:"darkorange"}}>
              An error has occurred in one of this component.{' '}
              <div
                style={{ cursor: 'pointer', color: '#0077FF' }}
                onClick={() => {
                  window.location.reload();
                }}
              >
                Reload this page
              </div>{' '}
            </p>
          </div>

          <div className="card-body">
            <details style={{color:"darkorange"}} className="error-details">
              <summary>Click for error details</summary>
              {errorInfo && errorInfo.componentStack.toString()}
            </details>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]).isRequired,
};